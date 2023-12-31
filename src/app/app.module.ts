import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { ListingSectionComponent } from './components/listing-section/listing-section.component';
import { HomeComponent } from './components/home/home.component';
import { DomainComponent } from './components/Home/domain/domain.component';
import { Domain1Component } from './components/Home/domain1/domain1.component';
import { CartComponent } from './components/Home/Domain1/cart/cart.component';
import { TableComponent } from './components/Home/Domain1/table/table.component';
import { PopupComponent } from './components/Home/popup/popup.component';
import { PopupFormComponent } from './components/Home/popup-form/popup-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderPrintComponent } from './components/order-print/order-print.component';
import { NgxPrintModule } from 'ngx-print';
import { INRComponent } from './components/order-print/inr/inr.component';
import { USDComponent } from './components/order-print/usd/usd.component';
import { AEDComponent } from './components/order-print/aed/aed.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    ListingSectionComponent,
    HomeComponent,
    DomainComponent,
    Domain1Component,
    CartComponent,
    TableComponent,
    PopupComponent,
    PopupFormComponent,
    FooterComponent,
    UserComponent,
    OrderPrintComponent,
    INRComponent,
    USDComponent,
    AEDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
