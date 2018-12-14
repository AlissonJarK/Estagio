import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainingComponent } from "./training/training.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "signup", component: SignupComponent },
      { path: "login", component: LoginComponent },
      { path: "training", component: TrainingComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
