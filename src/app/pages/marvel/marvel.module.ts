import { DetalheComponent } from './dialog/detalhe/detalhe.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from 'src/app/service/angular-material/angular-material.module';

import { MarvelComponent } from './marvel.component';

@NgModule({
  declarations: [MarvelComponent, DetalheComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  exports: [MarvelComponent]
})
export class MarvelModule { }
