import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent
implements OnInit
{
  selectedCurrency: string = 'INR';

  constructor(public currencyService: CurrencyService) {}



  ngOnInit(): void {
    this.currencyService.currencyChanged.subscribe((currency: string) => {
      this.selectedCurrency = currency;
      // Add logic to update cart data based on the selected currency
    });
  }


  getCurrencySymbol(): string {
    return this.currencyService.getCurrencySymbol();
  }

  // ngOnInit(): void {
  //   this.currencyService.currencyChanged.subscribe((currency: string) => {
  //     this.selectedCurrency = currency;
  //     // Add logic to update cart data based on the selected currency
  //   });
  // }


}
