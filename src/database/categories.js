export default class Categories {
  constructor(){
    this.categories = [];
    this._subscribed = [];
  }

  subscribe(subscribeFunction){
    this._subscribed.push(subscribeFunction)
  }

  unsubscribe(unsubscribeFunction){
    this._inscritos = this._inscritos.filter(func => func !== unsubscribeFunction);
  }

  notify(){
    this._subscribed.forEach(func => {
      func(this.categories);
    });
  }

  addCategory(newCategory){
    this.categories.push(newCategory);
    this.notify()
  }
  
}