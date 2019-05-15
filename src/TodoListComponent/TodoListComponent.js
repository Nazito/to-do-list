import React, { Component } from 'react';
import './TodoListComponent.css';


class TodoListComponent extends Component {


    deleteItem(index) {
    this.props.deleteItem(index);
    }
    
    
    editItem(item){
    this.props.editItem(item);	
    }

    footerActive(){
        this.props.footerActive()
    }


   
    
    
    
        render() {
    
            //Формируем набор из тегов li:
            
        let list = this.props.items.filter((elem) => {
            if(this.props.filter === 'all'){
            return elem}
            else if(this.props.filter === 'complited'){
            return !elem.complited
            }
            else if(this.props.filter === 'active'){
            return elem.complited
        }
        
        });
            list = list.map((item, index) => {
                
                return <li key={index} 
                className= {item.complited ? "case__item-active":"case__item-complited"}
                >
                    <button onClick={this.editItem.bind(this, item)} 
                    className= {item.complited ? "case__item_img-active":"case__item_img-complited"}>
                    </button>

                    <div className="case__item_list">
                    {item.value}
                    </div>	
                
                <div
                onClick={this.deleteItem.bind(this, index)}
                className="case__item_remove">
                
                </div> 
                </li>;
            });
        
            return (
          <ul className="case">
            {list}
          </ul>
            );
        }
    }

    export default TodoListComponent