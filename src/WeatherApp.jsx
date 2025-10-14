import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import "./WeatherApp.css"
import { useState } from "react";
export default function WeatherInfo(){
    const [weatherInfo,setWeatherInfo]=useState({
        City: "Kolkata",
        State: "West Bengal",
        Temp: 32,
        Weather: "Haze",
        feelslike: 36,
        humidity: 59,
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{testAlign: "center"}}>
            <h2 className="h2">Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}