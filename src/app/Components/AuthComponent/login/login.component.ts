import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from '../../../Services/Auth/auth.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private msalService: MsalService,
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {

  }
  public ismsal: boolean = false;


  async login() {
    if (!this.authService.isLoggedIn) {
      try {
        await this.msalService.instance.initialize();
        const response = await this.msalService.loginPopup().toPromise()
        if (response) {
          console.log(response);
          localStorage.setItem('idToken', response.idToken);
          localStorage.setItem('accessToken', response.idToken);
          localStorage.setItem('name', response.account.name!);
          //  this.dataEmitter.emit ( response.account.name);
          // this.authService.isLoggedIn = response.account.name;
          this.router.navigate(['/appcomponent']);
          console.log('User Login successfully');
        }

      } catch (error) {
        console.error('Login failed', error);
      }
    }

  }



}
