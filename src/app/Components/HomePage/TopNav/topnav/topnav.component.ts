import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from '../../../../Services/Auth/auth.interceptor';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent implements OnInit {

  constructor(private route: Router,
    private msalService: MsalService,
    private authService:AuthService
  ) { }


  UseName: String | null = "PRAVEEN"
  isActive: boolean = false;

  colorChange() {
    // this.isActive = true;
  }

  ngOnInit(): void {
    // this.UseName = localStorage.getItem('name');
    // console.log("Profile Name",this.UseName)
  }

  goToBilling() {
    this.route.navigate(['/billingdata']);
  }

  navigateToManage(): void {
    this.route.navigate(['/manage']);
  }


  navigateToAddEmployee(): void {
    this.route.navigate(['/addEmployee']);
  }

  logout() {
    this.msalService.logout();
    this.route.navigate(['/login']);
  }
}
