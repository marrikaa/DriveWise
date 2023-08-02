import { collection,  getDocs, query } from "firebase/firestore";
import { dbConnection } from "./firebaseConfig";


export const getCities = async () :Promise<any> =>{
    const citiesRef = collection(dbConnection, "cities");
    const querySnapshot = await getDocs(query(citiesRef));
    const cities = querySnapshot.docs.map(city => city.data().cityAndCountryName);
    return cities as String[];
}



