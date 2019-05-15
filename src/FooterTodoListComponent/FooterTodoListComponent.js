import React, { Component } from 'react';
import './FooterTodoListComponent.css';


class FooterTodoListComponent extends Component{

	deleteElementComplited(){
		this.props.deleteElementComplited()
	}

	showAll(){
		this.props.showAll()	
	}

	showActive(){
		this.props.showActive()
	}

	showComplited(){
		this.props.showComplited()
	}


	render(){
		let itemsLength = this.props.items
		return(
			<div className="footer">
				<span className="footer__span"><b>{itemsLength.length} </b>list</span>
				<ul className="footer__swich">
					<li	onClick={this.showAll.bind(this)}
					className={this.props.choiceSelected ==="all" ? "footer__swich_list-selected": "footer__swich_list"}>
					All
					</li>
					<li onClick={this.showActive.bind(this)}
					className={this.props.choiceSelected ==="active" ? "footer__swich_list-selected": "footer__swich_list"}>
					Active
					</li>
					<li onClick={this.showComplited.bind(this)}
					className={this.props.choiceSelected ==="complited" ? "footer__swich_list-selected": "footer__swich_list"}>
					Complited
					</li>
				</ul>
				<button onClick={this.deleteElementComplited.bind(this)}
				className="footer__btn">
					<b>cliar complited</b>
				</button>
			</div>
		)
	}	
}

export default FooterTodoListComponent