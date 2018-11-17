import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatCardModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material/tabs";
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContributeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
