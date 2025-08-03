import { Component } from "@angular/core";

@Component({
    selector: 'app-parent',
    template:
    `
      <app-child [message]="parentMessage" (messageEvent)="receiveMessage($event)"></app-child>
      <p>{{childMessage}}</p>
    <button (click)="changMessage()">Change message</button>
     <app-child [msg]="parentMessage"></app-child>
    `
})
export class ParentComponent {

    parentMessage = 'Hello from Parent!';
    childMessage = '';
    receiveMessage(message: string){
        this.childMessage = message;
    }

    msg = ['Hi Child!', 'Angular Rocks!', 'New Update!']
    index = 0;
    parentMessages = this.msg[this.index];

    changMessage(){
        this.index = (this.index + 1) % this.msg.length;
        this.parentMessages = this.msg[this.index];
    }
}