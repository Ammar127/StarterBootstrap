import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { Onboard1Component } from './onboard1/onboard1.component';
import { Onboard5Component } from './onboard5/onboard5.component';
import { Onboard4Component } from './onboard4/onboard4.component';
import { Onboard3Component } from './onboard3/onboard3.component';
import { Onboard2Component } from './onboard2/onboard2.component';
const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: '1', component: Onboard1Component },
      { path: '2', component: Onboard2Component },
      { path: '3', component: Onboard3Component },
      { path: '4', component: Onboard4Component },
      { path: '5', component: Onboard5Component },


    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
