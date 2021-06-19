export default class Categories {
  constructor(){
    this.categories = [];
    this._subscribed = [];
  }

  subscribe(subscribeFunction){
    this._subscribed.push(subscribeFunction)
  }

  notify(){
    this._subscribed.forEach(func => {
      func(this.categories);
    });
  }

  addCategory(newCategory){
    this.categories.push(newCategory);
  }
  
}