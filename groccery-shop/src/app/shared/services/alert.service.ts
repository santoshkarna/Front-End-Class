import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    message = '';
    type: 'success' | 'danger' | '' = '';
    visible = false;

    show(message: string, type: 'success' | 'danger' = 'success') {
        this.message = message;
        this.type = type;
        this.visible = true;
        setTimeout(() => this.clear(), 5000);
    }

    clear () {
        this.message = '';
        this.type = '';
        this.visible = false;
    }

}