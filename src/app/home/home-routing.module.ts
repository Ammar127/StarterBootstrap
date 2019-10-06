import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DevicesComponent } from './devices/devices.component';
import { Add1Component } from './add1/add1.component';
import { Add2Component } from './add2/add2.component';
import { Add3Component } from './add3/add3.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NodevicesComponent } from './nodevices/nodevices.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DevicesComponent },
      { path: 'nodevices', component: NodevicesComponent },
      { path: '1', component: Add1Component },
      { path: '2', component: Add2Component },
      { path: '3', component: Add3Component },
      { path: 'rooms', component: RoomsComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
