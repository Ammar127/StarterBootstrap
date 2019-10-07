import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DevicesComponent } from './devices/devices.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Add1Component } from './add1/add1.component';
import { Add2Component } from './add2/add2.component';
import { Add3Component } from './add3/add3.component';
import { NodevicesComponent } from './nodevices/nodevices.component';
import { Add4Component } from './add4/add4.component';



@NgModule({
  declarations: [HomeComponent, DevicesComponent, RoomsComponent, Add1Component, Add2Component, Add3Component, NodevicesComponent, Add4Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor() {
    console.log('inside of therouting file')
  }
 }
