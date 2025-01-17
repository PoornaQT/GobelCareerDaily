import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent implements OnInit {

  constructor(private route: Router) { }

  UseName: String = "PRAVEEN"
  
  ngOnInit(): void {
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
}
