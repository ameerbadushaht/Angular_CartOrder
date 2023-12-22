import { Injectable, signal } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {
    this.selectedCurrency = this.getStoredCurrency() || 'INR';
    console.log('Currency   at header constructor', this.selectedCurrency);
  }

  selectedCurrency: string = '';
  currencyChanged = new EventEmitter<string>();

  getCurrencySymbol(): string {
    switch (this.selectedCurrency) {
      case 'INR':
        return '₹';
      case 'USD':
        return '$';
      case 'AED':
        return 'AED';

      default:
        return '₹';
    }
  }

  setCurrency(currency: string): void {
    this.selectedCurrency = currency;
    this.currencyChanged.emit(currency);
  }

  getStoredCurrency() {
    return localStorage.getItem('Currency') || 'INR';
  }
}
