import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';




@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.css'],
})
export class OrderPrintComponent
{

  selectedCurrency: string | undefined;
  constructor(private currencyService: CurrencyService) {}
  ngOnInit() {
    this.selectedCurrency = this.currencyService.getStoredCurrency();
    console.log("selected is :::::::",this.selectedCurrency);
}
}
