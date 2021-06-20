import React, { Component } from 'react';
import './style.css'

class CategoriesList extends Component {
  constructor(){
    super();
    this.state = {
      categories:[]
    }
  }

  componentDidMount(){
    this.props.categories.subscribe(this._newCategories.bind(this));
  }

  _newCategories(categories){
    this.setState({...categories})
  }

  _handleInputEvent(e){
    if(e.key === "Enter") {
      let category = e.target.value;
      this.props.addCategory(category)
    }
  }

  render() { 
    return (
      <section className="categories-list">
        <ul className="categories-list_list">
            {this.props.categories.categories.map((category, index) => {
              return (
                <li 
                  key={index} 
                  className="categories-list_item"
                >{category}</li>
              )
            })}
        </ul>
        <input 
          type="text" 
          className="categories-list_input" 
          placeholder="Adicionar categoria"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
     );
  }
}
 
export default CategoriesList;