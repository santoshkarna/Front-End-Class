import { Component } from "@angular/core";

@Component({
    selector: 'app-parent3',
    template:`
    <app-child3>
    <p #projectedContent>This is projected from parent</p>
    </app-child3>
    `
})
export class Parent3Component {

}