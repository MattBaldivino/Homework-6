import React from "react";



function API(){	
	const pomonaWeather = async () => {
		try{
			const city = document.getElementById("city").value;
			const response = await fetch("https://api.weatherapi.com/v1/current.json?key=54c73d3dbacd48128ef214907232211&q=" + city + "&aqi=no");
			const result = await response.json();
			console.log(result);
			const degrees = document.createElement("p");
			const node = document.createTextNode("It is " + result.current.temp_f + " degrees but feels like " + result.current.feelslike_f + " degrees in " + city + ", " + result.location.region + ".");
			degrees.appendChild(node);
			const page = document.getElementsByTagName("body")[0];
			page.appendChild(degrees);
		}catch(e){
			alert("Something went wrong fetching the data!");
		}
	}
    return(
        <div>
			<label>Enter a city:</label>
			<input type="input" id="city"></input>
			<br></br>
			<button type="submit" onClick={pomonaWeather}>Submit</button>
        </div>
    )
}

export default API;