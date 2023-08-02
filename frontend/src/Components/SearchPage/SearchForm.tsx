import React, { useEffect, useState } from "react";
import { getCities } from "../../Client/User";

import './SearchForm.css'



function SearchForm () {
    const[pickUpDate, setPickUpDate] = useState<string>("")
    const[dropOffDate, setDropOffDate] = useState<string>("")
    const[pickUpLocation, setPickUpLotacion] = useState<string>("");
    const [filteredData, setFilteredData]= useState<string[]>([]);
    const [cities, setCities] = useState<string[]>()
    const [cityValue, setCityValue] =useState<string>("");

    useEffect(()=> { 
        const getExternalCities = async() =>{
            const cities = await getCities();
            setCities(cities);
        }
        getExternalCities();
    },[])


    const formSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
    }

    const filterData = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(event.target.value)
        const filteredCities = cities?.filter(city => 
        city.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
        setFilteredData(filteredCities!);
        if(event.target.value == '') setFilteredData([]);
    }

    
     

        const fillInput = (e:any) => {
            const input = e.target as HTMLElement;
            setCityValue(input.innerText) 
            setFilteredData([]);
        }
    

        

    return (
        <form onSubmit={formSubmitted} className='formInput' method='get'>
             <div id="myDropdown" className="dropdown-content">
                <input type='text' value={cityValue} placeholder='Pick-up location' onChange={filterData} className="pick-up-city" />
                {filteredData && filteredData.length !== 0 && <div className="cities-container">
                    {filteredData.map((city, index) => <p className="each-city" key={index} onClick={fillInput}  >{city}</p>)}  
                </div>}
            </div>
                
                <input
                    type="datetime-local"
                    placeholder="Pick up date"
                    min={new Date().toISOString().slice(0, -8)}
                    id="date" 
                    data-role="calendarpicker" 
                    onChange={(e)=>setPickUpDate(e.target.value)} />
                <input
                    type="datetime-local"
                    min={pickUpDate}
                    id="date" 
                    data-role="calendarpicker" 
                    onChange={(e)=>setDropOffDate(e.target.value)} />
            <button type="submit" value="Submit" className='search-button'>search</button>
        </form> 
     )
}

export default SearchForm;