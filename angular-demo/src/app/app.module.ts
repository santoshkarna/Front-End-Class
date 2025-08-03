import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { HoverHighLightDirective } from './hover-high-light.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';
import { ChildComponent } from './communication/child.component';
import { ParentComponent } from './communication/parent.component';
import { Child2Component } from './communication/child2.component';
import { Parent2Component } from './communication/paent2.component';
import { Child3Component } from './communication/child3.component';
import { Parent3Component } from './communication/parent3.component';
import { Child4Component } from './communication/child4.component';
import { Parent4Component } from './communication/parent4.component';
import { API_ENDPOINT } from './services/api-endpoint.token';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ConfigService } from './services/config.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercasepipe.component';
import { AlphaOnlyValidatorDirective } from './validator/alpha-only-validator.directive';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { UserErrorHandler } from './errorhandler/custom-error-handler';
import { ErrorPageComponent } from './errorhandler/error-page.component';
import { CounterComponent } from './counter/counter.component';

export function apiServiceFactory(enpoint: string) {
  return new ApiService(enpoint);
}
export function loadConfig(configService: ConfigService) {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    HoverHighLightDirective,
    AlphaOnlyValidatorDirective,
    PipesComponent,
    DemoLifecycleComponent,
    ChildComponent,
    ParentComponent,
    Child2Component,
    Parent2Component,
    Child3Component,
    Parent3Component,
    Child4Component,
    Parent4Component,
    HomeComponent,
    UserComponent,
    LoginComponent,
    UppercasePipe,
    PhoneListComponent,
    ErrorPageComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: API_ENDPOINT, useValue: 'http://localhost:4200/' },
    { provide: ApiService, useFactory: apiServiceFactory, deps: [API_ENDPOINT] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // {provide: APP_INITIALIZER, useFactory: loadConfig, deps:[ConfigService], multi: true},
    {provide: ErrorHandler, useClass: UserErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
