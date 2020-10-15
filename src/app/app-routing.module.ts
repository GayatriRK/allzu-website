import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: "home", component:HomeComponent},
  { path: "shopingcart", component:ShopingCartComponent},
  { path: "checkout", component:CheckoutComponent},
  { path: "header", component:HeaderComponent},
  { path: "footer", component:FooterComponent},
  { path: "productdetails", component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  ShopingCartComponent,
  CheckoutComponent,
  HeaderComponent,
  FooterComponent,
  ProductDetailsComponent
]
