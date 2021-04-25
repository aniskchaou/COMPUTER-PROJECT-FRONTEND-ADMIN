import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { ClientComponent } from './modules/client/components/client/client.component';
import { StockComponent } from './modules/stock/components/stock/stock.component';
import { SupplierComponent } from './modules/supplier/components/supplier/supplier.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AccessoryComponent } from './modules/acessory/components/accessory/accessory.component';
import { BuyclientComponent } from './modules/buyclient/components/buyclient/buyclient.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { ProduitComponent } from './modules/product/produit/produit.component';
import { NewTelephoneComponent } from './modules/newtelephone/components/new-telephone/new-telephone.component';
import { FixComponent } from './modules/fix/components/fix/fix.component';
import { UsedTelephoneComponent } from './modules/usedphone/usedphone/used-telephone/used-telephone.component';
import { PartComponent } from './modules/part/components/part/part.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';
import { LoginComponent } from './modules/general/login/login.component';
import { AddAccessoryComponent } from './modules/acessory/components/add-accessory/add-accessory.component';
import { EditAccessoryComponent } from './modules/acessory/components/edit-accessory/edit-accessory.component';
import { ViewAccessoryComponent } from './modules/acessory/components/view-accessory/view-accessory.component';
import { AddBuyClientComponent } from './modules/buyclient/components/add-buy-client/add-buy-client.component';
import { EditBuyClientComponent } from './modules/buyclient/components/edit-buy-client/edit-buy-client.component';
import { ViewBuyClientComponent } from './modules/buyclient/components/view-buy-client/view-buy-client.component';
import { AddClientComponent } from './modules/client/components/add-client/add-client.component';
import { EditClientComponent } from './modules/client/components/edit-client/edit-client.component';
import { ViewClientComponent } from './modules/client/components/view-client/view-client.component';
import { AddFixComponent } from './modules/fix/components/add-fix/add-fix.component';
import { EditFixComponent } from './modules/fix/components/edit-fix/edit-fix.component';
import { ViewFixComponent } from './modules/fix/components/view-fix/view-fix.component';
import { AddNewTelephoneComponent } from './modules/newtelephone/components/add-new-telephone/add-new-telephone.component';
import { EditNewTelephoneComponent } from './modules/newtelephone/components/edit-new-telephone/edit-new-telephone.component';
import { ViewNewTelephoneComponent } from './modules/newtelephone/components/view-new-telephone/view-new-telephone.component';
import { AddPartComponent } from './modules/part/components/add-part/add-part.component';
import { EditPartComponent } from './modules/part/components/edit-part/edit-part.component';
import { ViewPartComponent } from './modules/part/components/view-part/view-part.component';
import { AddProduitComponent } from './modules/product/add-produit/add-produit.component';
import { EditProductComponent } from './modules/product/edit-product/edit-product.component';
import { ViewProductComponent } from './modules/product/view-product/view-product.component';
import { AddStockComponent } from './modules/stock/components/add-stock/add-stock.component';
import { EditStockComponent } from './modules/stock/components/edit-stock/edit-stock.component';
import { ViewStockComponent } from './modules/stock/components/view-stock/view-stock.component';
import { AddSupplierComponent } from './modules/supplier/components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './modules/supplier/components/edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './modules/supplier/components/view-supplier/view-supplier.component';
import { AddUsedTelephoneComponent } from './modules/usedphone/usedphone/add-used-telephone/add-used-telephone.component';
import { EditUsedTelephoneComponent } from './modules/usedphone/usedphone/edit-used-telephone/edit-used-telephone.component';
import { ViewUsedPhoneComponent } from './modules/usedphone/usedphone/view-used-phone/view-used-phone.component';
import { CellularplanComponent } from './modules/stock/cellularplan/cellularplan.component';
import { OtherproductComponent } from './modules/stock/otherproduct/otherproduct.component';



const routes: Routes = [

  { path: 'client', component: ClientComponent },
  { path: 'product', component: ProduitComponent },
  { path: 'stock', component: StockComponent },
  { path: 'newphone', component: NewTelephoneComponent },
  { path: 'fix', component: FixComponent },
  { path: 'usedphone', component: UsedTelephoneComponent },
  { path: 'part', component: PartComponent },
  { path: 'buyclient', component: BuyclientComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'accessory', component: AccessoryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otherproducts', component: OtherproductComponent },
  { path: 'cellularplans', component: CellularplanComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


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
    PartComponent,
    ConfigurationComponent,
    LoginComponent,
    AddAccessoryComponent,
    AddBuyClientComponent,
    AddClientComponent,
    AddFixComponent,
    AddNewTelephoneComponent,
    AddPartComponent,
    AddProduitComponent,
    AddStockComponent,
    AddSupplierComponent,
    AddUsedTelephoneComponent,
    EditAccessoryComponent,
    EditBuyClientComponent,
    EditClientComponent,
    EditFixComponent,
    EditNewTelephoneComponent,
    EditPartComponent,
    EditProductComponent,
    EditStockComponent,
    EditSupplierComponent,
    EditUsedTelephoneComponent,
    ViewAccessoryComponent,
    ViewBuyClientComponent,
    ViewClientComponent,
    ViewFixComponent,
    ViewNewTelephoneComponent,
    ViewPartComponent,
    ViewProductComponent,
    ViewStockComponent,
    ViewSupplierComponent,
    ViewUsedPhoneComponent,
    CellularplanComponent,
    OtherproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
