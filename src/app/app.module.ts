import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStickyDirective } from 'ng-sticky';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { TreeChildComponent } from './tree/tree-child/tree-child.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyComponent } from './vacancies/vacancy/vacancy.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ScrollComponent } from './scroll/scroll.component';
import { VirtualListModule } from 'angular-virtual-list';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    TreeComponent,
    TreeChildComponent,
    VacanciesComponent,
    VacancyComponent,
    NgStickyDirective,
    TicTacToeComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    VirtualListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
