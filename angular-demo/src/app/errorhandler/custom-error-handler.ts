import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UserErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            console.log('Http error: ', error.message);

            if (error.status === 404) {
                router.navigate(['/not-found']);
            } else if (error.status === 401 || error.status === 403) {
                router.navigate(['/unauthorized']);
            } else {
                router.navigate(['server-error']);
            }

        } else {
            console.log('Client Error: ', error.message);
            router.navigate(['/error'])
        }
        this.logErrorToServer(error);

    }

    logErrorToServer(error: any) {
        console.log('Logging error to server: ', error);
    }

}