import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RingsPageComponent } from "./rings-page/rings-page.component";
import { NecklacesPageComponent } from "./necklaces-page/necklaces-page.component";
import { EarringsPageComponent } from "./earrings-page/earrings-page.component";


@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
   
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: "./admin/login", pathMatch: 'full' },
                    { path: 'login', component: LoginPageComponent },
                    { path: '', redirectTo: "./admin/rings", pathMatch: 'full' },
                    { path: 'rings', component: RingsPageComponent },
                    { path: '', redirectTo: "./admin/earrings", pathMatch: 'full' },
                    { path: 'earrings', component: EarringsPageComponent },
                    { path: '', redirectTo: "./admin/necklaces", pathMatch: 'full' },
                    { path: 'necklaces', component: NecklacesPageComponent }
                ]
            }
        ])
    ],
})

export class AdminModule { }