import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-aed',
  templateUrl: './aed.component.html',
  styleUrls: ['./aed.component.css']
})
export class AEDComponent implements OnInit
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



  products = [
    {
      name: 'Google Workspace',
      quantity: 2,
      price: 888,
      taxAmount: 500,
      discountAmount: 25,
      totalAmount: 1000,
    },
    {
      name: 'xxx',
      quantity: 3,
      price: 785,
      taxAmount: 0,
      discountAmount: 10,
      totalAmount: 0,
    },
  ];
  newWin: any;

  // print() {
  //   print();
  // }

  print() {
    // html2pdf
    const element = document.getElementById('invoiceTable');
    html2pdf().from(element).save();


  }




}
