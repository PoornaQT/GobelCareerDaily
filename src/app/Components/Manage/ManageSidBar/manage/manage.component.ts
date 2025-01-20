import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate(['manage', route]);
  }


  // navigateToManageRole(): void {
  //   this.router.navigate(['/manageRole']);
  // }

  // navigateToManageVendor(): void {
  //   this.router.navigate(['/manageVender']);
  // }

  // navigateToManageClient(): void {
  //   this.router.navigate(['/manageClient']);
  // }

  // navigateToManageProject(): void {
  //   this.router.navigate(['/manageProject']);
  // }
}

