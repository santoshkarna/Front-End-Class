import { Inject, Injectable } from "@angular/core";
import { API_ENDPOINT } from "./api-endpoint.token";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(@Inject(API_ENDPOINT)private enpoint: string){}

    getEnPoint(){
        return this.enpoint;
    }

}