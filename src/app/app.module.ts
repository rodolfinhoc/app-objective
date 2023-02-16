import { AngularMaterialModule } from 'src/app/service/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelModule } from './pages/marvel/marvel.module';

//** MATERIALS ANGULAR **/
@NgModule({
  declarations: [AppComponent],
  imports: [
    MarvelModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
