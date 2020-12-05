import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { ClientComponent } from './content/client/client.component';
import { StockComponent } from './content/stock/stock.component';
import { SupplierComponent } from './content/supplier/supplier.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AccessoryComponent } from './content/accessory/accessory.component';
import { BuyclientComponent } from './content/buyclient/buyclient.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { ProduitComponent } from './content/produit/produit.component';
import { NewTelephoneComponent } from './content/new-telephone/new-telephone.component';
import { FixComponent } from './content/fix/fix.component';
import { UsedTelephoneComponent } from './content/used-telephone/used-telephone.component';
import { PartComponent } from './content/part/part.component';


const routes:Routes=[

  {path:'client',component:ClientComponent},
  {path:'product',component:ProduitComponent},
  {path:'stock',component:StockComponent},
  {path:'newphone',component:NewTelephoneComponent},
  {path:'fix',component:FixComponent},
  {path:'usedphone',component:UsedTelephoneComponent},
  {path:'part',component:PartComponent},
  {path:'client',component:BuyclientComponent},
  {path:'supplier',component:SupplierComponent},
  {path:'',redirectTo:'invoice',pathMatch:'full'},
  {path:'**',redirectTo:'invoice',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientComponent,
    StockComponent,
    SupplierComponent,
    AccessoryComponent,
    BuyclientComponent,
    DashboardComponent,
    ProduitComponent,
    NewTelephoneComponent,
    FixComponent,
    UsedTelephoneComponent,
    PartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
