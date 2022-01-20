import EventEmitter from "eventemitter3";
import Application from "./Application";


export default class Notification extends EventEmitter{
    constructor() {
        super();

        const notification = document.createElement('div');
        notification.innerHTML = this.type;
        console.log(this.type);
        document.body.appendChild(notification)
    }
}