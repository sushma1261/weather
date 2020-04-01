import React from 'react';

class Display extends React.Component {
	render() {
		return (
			<div>
				<table border = '2'>
					<tbody>
						<tr>
							<td>Temperature</td>
							<td>{this.props.temp}</td>
						</tr>
						<tr>
							<td>Humidity</td>
							<td>{this.props.hum}</td>
						</tr>
						<tr>
							<td>Description</td>
							<td>{this.props.desc}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Display;