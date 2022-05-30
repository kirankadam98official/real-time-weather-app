import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard';


function Tem() {

  const [searchValue,setSearchValue]= useState("Pune");
const [tempInfo,setTempInfo]=useState({});

  const getWeatherInfo = async()=>{
    try {

      let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c486aec08fb4f967ab85f5746e3a1d9`

      const res= await fetch(url)
      const data =await res.json();
      const {main:weathermood} = data.weather[0];

      const {temp,humidity,pressure}= data.main;

        const {name}= data;

      const {speed}= data.wind;

      const {country,sunset} =data.sys;

      const myNewWeatherInfo ={
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset,
        weathermood

      };
      setTempInfo(myNewWeatherInfo);
      
    } catch (error) {
      console.log(error)
      
    }
  };

  useEffect(()=>{

    getWeatherInfo();
  },[])
  return (
    <>
      <div className='wrap'>
          <div className='search'>
            <div className='box'>
            <input type="search"
             placeholder='Search...' 
             autoFocus id='search' 
             className='searchTerm'
             value={searchValue}
             onChange={(e)=>{setSearchValue(e.target.value)}}
             />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>search </button>
            </div>

          </div>

      </div>

      {/* out tem card  */}

     <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Tem
