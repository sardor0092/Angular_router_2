import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // {path:'' , redirectTo:"/home",pathMatch:"full"},
  {path:'home' ,component:HomeComponent},
  {path:'about',pathMatch:"prefix" , component:AboutComponent},
  {path:'product', component:ProductsComponent},
  {path:'product-detail/:id' , component:ProductsDetailComponent},
  {path:'contact', component:ContactComponent},
  {path:'**' , component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
