import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:"signup", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"signin", component:SignInComponent },
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
