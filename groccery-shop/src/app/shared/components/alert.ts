import { Component } from "@angular/core";
import { AlertService } from "../services/alert.service";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-alert',
    imports: [CommonModule],
    templateUrl: './alert.html'
})
export class Alert {
    constructor(public alertService: AlertService){}
}