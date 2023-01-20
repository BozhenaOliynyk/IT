import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from './admin/shared/main-layout/main-layout.component';
import { RingsPageComponent } from './admin/rings-page/rings-page.component';
import { NecklacesPageComponent } from './admin/necklaces-page/necklaces-page.component';
import { EarringsPageComponent } from './admin/earrings-page/earrings-page.component';


const routes: Routes = [
  {
    path: '', component:MainLayoutComponent,children:[
      {path:'', redirectTo: '/', pathMatch: 'full'},
      {path:'',component: MainPageComponent},
      {path:'product/:id', component: RingsPageComponent},
      {path:'product/:id', component: EarringsPageComponent},
      {path:'product/:id', component: NecklacesPageComponent},
      {path:'cart', component: CartPageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// <router-outlet></router-outlet>
