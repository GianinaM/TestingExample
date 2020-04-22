import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [IndexComponent, HomeComponent]
})
export class HomeModule { }
