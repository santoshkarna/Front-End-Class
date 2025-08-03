import { Component } from "@angular/core";

@Component({
    selector: 'app-child2',
    template: 
    `
    <p>Child Component</p>
    `
})
export class Child2Component {

    sayHello(){
        alert('Hello from Child2!');
    }

}