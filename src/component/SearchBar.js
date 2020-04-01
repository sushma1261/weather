import React from 'react';

class SearchBar extends React.Component {

	state = { query: "" };

	onFormSubmit = (e) => {
		e.preventDefault();
		console.log("***"+this.state.query);
		this.props.searchContent(this.state.query);
	}
	render() {
		return (
			<div>
				<form onSubmit = {this.onFormSubmit}>
					<input type = "text"
						onChange = {e => this.setState({query : e.target.value})} 
					/>
					<input type = "submit" />
				</form> 
			</div>
		);
	}
}
export default SearchBar;