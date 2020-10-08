import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from '../pages/home/home.component';
// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
import { CatalogueComponent } from '../pages/catalogue/catalogue.component';
import { ProductComponent } from '../pages/product/product.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'home' , component: HomeComponent},
    {path:'catalogue' , component: CatalogueComponent},
    {path:'product', component: ProductComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'contact', component:ContactUsComponent} 
   
];


@NgModule({
 
  imports: [
    CommonModule,
  
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // SidebarComponent

  ],



  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


  

  declarations: [HomeComponent, CatalogueComponent, ProductComponent, AboutUsComponent, ContactUsComponent]
})
export class SharedModule { }
