import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-child',
    template:
    `
      <p>Message from parent: {{message}}</p>
      <button (click)="sendMessage()">Send Message to Parent</button>
    <p>Current message: {{msg}}</p>
    <p *ngIf="log.length">Change log</p>
     <ul>
      <li *ngFor="let item of log">{{item}}</li>
     </ul>
    `
})
export class ChildComponent  implements OnChanges{
    
    @Input() message!: string;

    @Output() messageEvent = new EventEmitter<string>();

    sendMessage(){
        this.messageEvent.emit('Hello Parent! Message from Child.')
    }

    @Input() msg!: string;
    log:string[]=[];

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['msg']){
            const prev = changes['msg'].previousValue;
            const curr = changes['msg'].currentValue;
            this.log.push(`Message changed from ${prev} to ${curr} `);
        }
    }

}