import { Component } from '@angular/core';

@Component({
  selector: 'app-monthly-in-voice',
  templateUrl: './monthly-in-voice.component.html',
  styleUrl: './monthly-in-voice.component.css'
})
export class MonthlyInVoiceComponent {

  get totalPOAmount(): number {
    // return this.budgetData.reduce((sum, row) => sum + row.poAmount, 0);
    return 0;

  }

  get totalInvoicedAmount(): number {
    // return this.budgetData.reduce((sum, row) => sum + row.invoicedAmount, 0);
    return 0;
  }
}
