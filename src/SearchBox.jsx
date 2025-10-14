import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL = 'https://api.weatherstack.com/current';
    const API_KEY= import.meta.env.VITE_api_key;
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?access_key=${API_KEY}&query=${city}`);
            let jsonResponse=await response.json();
            //console.log(jsonResponse);
            let result={
                Temp: jsonResponse.current.temperature,
                humidity: jsonResponse.current.humidity,
                feelslike:jsonResponse.current.feelslike,
                Weather:jsonResponse.current.weather_descriptions[0],
                City:jsonResponse.location.name,
                State:jsonResponse.location.region,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
    }
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let info=await getWeatherInfo();
            updateInfo(info);
            setError(false);
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className="SearchBox"> 
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error&&<p style={{color: "red"}}>No such place exists</p>}
            </form>
        </div>
    )
}