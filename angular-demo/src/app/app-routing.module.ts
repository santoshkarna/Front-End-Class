import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './communication/child.component';
import { Child2Component } from './communication/child2.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { ErrorPageComponent } from './errorhandler/error-page.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'demo-life', component: DemoLifecycleComponent, children: [
      { path: 'child1', component: ChildComponent },
      { path: 'child2', component: Child2Component },
    ]
  },
  { path: 'greeting', component: GreetingsComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'error', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
