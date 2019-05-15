import React, { Component } from 'react';
import AddTodoComponent from '../AddComponent/AddTodoComponent';
import TodoListComponent from '../TodoListComponent/TodoListComponent';
import FooterTodoListComponent from '../FooterTodoListComponent/FooterTodoListComponent';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			itemsState: true,
			filter: "all",
			};
				
	}



	setItems(){
		
		this.setState({itemsState: !this.state.itemsState})
	
		 this.state.items.forEach((item, index) => {
			console.log(item.complited)
			let array = this.state.items;
			
			if(this.state.itemsState){
			array[index].complited = false
			this.setState({items: array})	
			}
			else if(!this.state.itemsState){
			array[index].complited = true
			this.setState({items: array})	
			}
			
		});	

		
	}

	editItem(item){
		let index = this.state.items.indexOf(item)
		let array = this.state.items;
		array[index].complited = !array[index].complited
		this.setState({items: array})
	}

	addItem(item){

		this.setState({items: this.state.items.concat(item)});
		
	}

	deleteItem(index) {
	this.state.items.splice(index, 1);
	this.setState({items: this.state.items});
	}

	showAll(){
		this.setState({filter: "all"})	
	}

	showActive(){
		this.setState({filter: "active"})	
	}

	showComplited(){
		console.log(this)
		this.setState({filter: "complited"})
	
	}

	deleteElementComplited(){
		this.state.items.sort ((a, b) =>{					/*сортировка и удаление отмеченых елементов */
			return(b['complited'] - a['complited'])  	
			});
		const arr = []
		this.state.items.map((item, index) => {
			if(this.state.items[index]['complited']){
					arr.push(this.state.items[index])
				}
		});
		this.state.items.splice(0, arr.length);
		this.setState({items: this.state.items})	
	}





	render() {
		return (
			<div className="page">
				
				
				
				<AddTodoComponent
					setItems={this.setItems.bind(this)}
					addItem={this.addItem.bind(this)}
					stateVal={this.state.itemsState}
				/>
				<TodoListComponent 
					filter={this.state.filter}
					items={this.state.items}
					deleteItem={this.deleteItem.bind(this)}
					editItem={this.editItem.bind(this)}
				/>
				{!!this.state.items.length && 
					<FooterTodoListComponent
						items={this.state.items}
						deleteElementComplited={this.deleteElementComplited.bind(this)}
						showComplited={this.showComplited.bind(this)}
						showAll={this.showAll.bind(this)}
						showActive={this.showActive.bind(this)}
						choiceSelected={this.state.filter}
					/>
				}

			</div>
		);
	}
} 	




export default App;
