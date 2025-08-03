import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'app-error-page',
    template:`
    <div>
      <h1>Error</h1>   
      <p>{{message}}</p>
    </div>
    `
})
export class ErrorPageComponent {
    message = "An unexpected error occured.";

    constructor(private route: ActivatedRoute) {
        const routeData = this.route.snapshot.data;
        if (routeData && routeData['message']) {
            this.message = routeData['message'];
        }
    }
}