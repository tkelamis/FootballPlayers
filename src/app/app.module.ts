import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { TabStripModule } from '@progress/kendo-angular-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { HttpDataComponent } from './http-data/http-data.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './fields/fields.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlayerTableComponent,
    HttpDataComponent,
    TabPageComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    TabStripModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
