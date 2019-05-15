import React, { Component } from 'react';
import './AddTodoComponent.css';

var prevId = 6

class AddTodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}
	
	addItem(event){
		prevId = prevId + 1
	
		if (event.key === 'Enter'){
     		this.props.addItem({value: this.state.value, complited: true, id: prevId});
		  	this.setState({value: ''})
		}
	}


	//Записываем value инпута в this.state.value:
	handleChange(event) {	
	  this.setState({value: event.target.value});	
	}

	render() {

		//По нажатию на кнопку вызываем addItem:


		return (
			<div className="header">
				<h1 className="header__headline">todos</h1>
				<button onClick={this.props.setItems.bind(this)} 
				className={this.props.stateVal ? "header__switch-complited":"header__switch-active"}>
				</button>
				<input
					className="header__input"
				placeholder="What needs to be done?"
				value={this.state.value}
				onChange={this.handleChange.bind(this)}
				onKeyPress={this.addItem.bind(this)}
				/>
			</div>
				);
	}
}


export default AddTodoComponent