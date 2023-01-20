import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './admin/shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RingsPageComponent } from './admin/rings-page/rings-page.component'
import { EarringsPageComponent } from './admin/earrings-page/earrings-page.component';
import { NecklacesPageComponent } from './admin/necklaces-page/necklaces-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    // ProductPageComponent,
    CartPageComponent,
    RingsPageComponent,
    EarringsPageComponent,
    NecklacesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
