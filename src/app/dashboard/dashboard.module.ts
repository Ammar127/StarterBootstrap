import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash/dash.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [DashboardComponent, DashComponent, TimelineComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
