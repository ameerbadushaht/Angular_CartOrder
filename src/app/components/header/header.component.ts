import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent
//  implements OnInit
 {
  @ViewChild('menuIcon') menuIcon!: ElementRef ;
  @ViewChild('navLink') navLink!: ElementRef ;

  constructor(public currencyService: CurrencyService,private router: Router) {

    this.currencyService.selectedCurrency = this.currencyService.getStoredCurrency();
    console.log('Currency   at header constructor', this.currencyService.selectedCurrency);
  }


  // ngOnInit() {

  //   this.currencyService.selectedCurrency = this.currencyService.getStoredCurrency();
  //   console.log('Currency   at header ngOnInit', this.currencyService.selectedCurrency);

  // }

  onCurrencyChange(event: Event): void {
    const selectedCurrency = (event.target as HTMLSelectElement).value;
    localStorage.setItem('Currency', selectedCurrency);
    console.log('stored in local ', selectedCurrency);
    this.currencyService.setCurrency(selectedCurrency);
  }
  isPrintPage(): boolean {
    return this.router.url.includes('/print');
  }


  ngAfterViewInit() {
    if (this.menuIcon && this.navLink) {
      this.menuIcon.nativeElement.addEventListener('click', () => {
        this.navLink.nativeElement.classList.toggle('mobile-menu');
      });
    }
  }
}
