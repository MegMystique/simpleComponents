import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
