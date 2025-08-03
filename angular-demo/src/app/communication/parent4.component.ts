import { AfterViewChecked, AfterViewInit, Component, ViewChild } from "@angular/core";
import { Child4Component } from "./child4.component";

@Component({
    selector: 'app-parent4',
    template: `
    <app-child4></app-child4>
    <button (click) = "update()">Update</button>
    `
})
export class Parent4Component implements AfterViewInit, AfterViewChecked {


    @ViewChild(Child4Component) child!: Child4Component;

    viewInitCount = 0;
    viewCheckedCount = 0;


    ngAfterViewInit(): void {
        this.viewInitCount++;
        console.log('ngAfterViewInit: Accessed Child name: ', this.child.name)
    }

     ngAfterViewChecked(): void {
        this.viewCheckedCount++;
        console.log('ngAfterViewChecked called: ', this.viewCheckedCount)
    }

    update() {
        this.child.name = 'Updated Child Component';
    }
}