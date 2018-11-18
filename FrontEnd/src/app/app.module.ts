import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContributeComponent } from './contribute/contribute.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatCardModule} from "@angular/material";
import {MatTabsModule} from "@angular/material/tabs";
import { MapComponent } from './map/map.component';
import { OrgComponent } from './org/org.component';
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContributeComponent,
    MapComponent,
    OrgComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
