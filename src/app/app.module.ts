import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
// import { LogModule } from './Login-Register/log.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContactUsComponent,
    // AboutUsComponent,
    // ProductComponent,
    // CatalogueComponent,
    FooterComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
