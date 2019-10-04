import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { Onboard1Component } from './onboard1/onboard1.component';
import { Onboard2Component } from './onboard2/onboard2.component';
import { Onboard3Component } from './onboard3/onboard3.component';
import { Onboard4Component } from './onboard4/onboard4.component';
import { Onboard5Component } from './onboard5/onboard5.component';



@NgModule({
  declarations: [CoreComponent, LoginComponent, Onboard1Component, Onboard2Component, Onboard3Component, Onboard4Component, Onboard5Component],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
