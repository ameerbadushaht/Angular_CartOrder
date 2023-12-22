import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { OrderPrintComponent } from './components/order-print/order-print.component';
import { INRComponent } from './components/order-print/inr/inr.component';




const routes: Routes = [
 {
  path:'user',
  component:UserComponent
 },{
  path:'',
  component:HomeComponent
 },{
  path:'print',
  component:OrderPrintComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
