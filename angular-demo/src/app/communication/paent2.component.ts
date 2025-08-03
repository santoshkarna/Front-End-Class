import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Child2Component } from "./child2.component";

@Component({
    selector: 'app-parent2',
    template: `
    <app-child2></app-child2>
    <button (click)= "callChild2Method()">Call Child Method</button>
    `
})
export class Parent2Component implements AfterViewInit {


    @ViewChild(Child2Component) child2Component!: Child2Component;

    
    ngAfterViewInit(): void {
        // this.child2Component.sayHello();
    }

    callChild2Method(){
        this.child2Component.sayHello();
    }
}