import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userEmail: any
  password: any
  showerror=false

  constructor(private auth: AuthService,
    private router: Router) { }

  googleAuth() {
    this.auth.googleAuth()
      .then(() => this.router.navigate(['/home']))
      .catch((hiba) => console.log(hiba))
  }
  signIn() {
    this.auth.signIn(this.userEmail, this.password).then(() => 
    {
      this.showerror=false
      this.router.navigate(['/home'])
    }).catch((hiba) => {
      this.showerror=true
      console.log(hiba)
    })
  }
}
