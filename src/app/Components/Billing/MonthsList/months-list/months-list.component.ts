import { Component, OnInit } from '@angular/core';
import { PoNumberDetails } from '../../../../Models/Billing';
import { MonthList } from '../../../../Models/MonthList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-months-list',
  templateUrl: './months-list.component.html',
  styleUrl: './months-list.component.css'
})
export class MonthsListComponent implements OnInit {

  constructor (private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  editingIndex: number | null = null;
  PonumberDetials: PoNumberDetails = new PoNumberDetails();
  monthData: MonthList = new MonthList();
  monthList: MonthList[] = [];


  GoTomonthlyBudget(){
    this.router.navigate(['/monthlyBudget']);
  }
  
}
