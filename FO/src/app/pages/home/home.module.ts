import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CaesarComponent } from './caesar/caesar.component';
import { DecryptCaesarComponent } from './decrypt-caesar/decrypt-caesar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule
  ],
  declarations: [
    IndexComponent,
    HomeComponent,
    CaesarComponent,
    DecryptCaesarComponent
  ]
})
export class HomeModule { }
