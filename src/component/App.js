import React from 'react';
import SearchBar from './SearchBar';
// import weatherDetails from './weatherDetails';
import Display from './Display'; 


class App extends React.Component {
	state = { query : "", hum : 0, temp : 0, desc: ""};

	onFormSubmit = async term => {
		console.log(term);
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=fed0ed7e2b5ca9bfa2832a5b347a2e79`);
  
  		const response = await api_call.json();
  		const descr = response.weather[0].description;
  		this.setState( {temp : response.main.temp, hum : response.main.humidity, desc : descr });
  		console.log(response);
		console.log(response.weather[0].description);
	}
	

	render() {
		return (
			<div>
				<SearchBar searchContent = {this.onFormSubmit} />
				
				<Display temp = {this.state.temp} hum = {this.state.hum} desc = {this.state.desc} />
			</div>
		);
	}
}

export default App;