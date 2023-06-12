import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, setDoc, doc, getDoc, where, query, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { User } from '../types/types';
import { authenticator, dbConnection } from './firebaseConfig';

const isUserUnique = async (username: string): Promise<boolean> => {
    const usersRef = collection(dbConnection, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size === 0;
}

export const register = async (username: string, email: string, password: string): Promise<string> => {
    if (! await isUserUnique(username)) {
        return "username already in use";
    }
    try{
        const userCredential = await createUserWithEmailAndPassword(authenticator, email, password);
        await addUser(username, userCredential.user.uid); 
        return "success";
    }catch( e: any ){
        return e.message;
        
    }
}

export const login = async (email: string, password: string): Promise<User | undefined> => {
    const userCredentials = await signInWithEmailAndPassword(authenticator, email, password);
    const user = await getUserById(userCredentials.user.uid);
    return { username: user.username, uid: userCredentials.user.uid } as User;
}

export const addUser = async (userName: string, uid: string) => {
    await setDoc(doc(dbConnection, "users", uid), {
        username: userName,
        email: "",
        img: "",
        cars: [],
        reviews: [],
        messages: [],
    });
}

export const getUserById = async (uid: string): Promise<User> => {
    const docRef = doc(dbConnection, "users", uid);
    const docSnap = (await getDoc(docRef)).data();
    return docSnap as User;
}


export const getAllUsers = async (): Promise<User[] | undefined> => {
    const usersRef = collection(dbConnection, "users");
    const querySnapshot = await getDocs(query(usersRef));
    const users = querySnapshot.docs.map(user => user.data());
    return users as User[];
}

export const updateUser = async (user: User): Promise<string> => {
    const docRef = doc(dbConnection, "users", user.uid);
    setDoc(docRef, user, { merge: true });
    return "success";
}

export const addCarToUserByUserUid = async (uid: string, CarID: string) => {
    const usersRef = doc(dbConnection, "users", uid);
    await updateDoc(usersRef, {
        cars: arrayUnion(CarID)
    });
}