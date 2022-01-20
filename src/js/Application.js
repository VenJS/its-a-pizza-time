import EventEmitter from "eventemitter3";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    

    const pizzaObject = [{type: 'hawaiian', price: '8.99'}, {type: 'pepperoni', price: '9.99'}, {type:'margherita', price: '6.99'}];
    
  

    for (let i = 0; i < pizzaObject.length; i++) {
      
      const pizza = document.createElement('div');
      pizza.setAttribute('class', 'card');
      pizza.setAttribute('type', pizzaObject[i].type);
      pizza.setAttribute('price', pizzaObject[i].price);
      pizza.innerHTML = 'pizza' + i;
      pizza.onclick = function() {return this.notification}
      
      document.body.appendChild(pizza);
    }
       



  



    this.emit(Application.events.READY);
  }
}
