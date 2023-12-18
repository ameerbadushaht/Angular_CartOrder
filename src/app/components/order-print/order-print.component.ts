import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.css'],
})
export class OrderPrintComponent {
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

  print() {
    window.print();
  }
}
