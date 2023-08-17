import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {AppRoutingModule} from "./app-routing.module";
import { BooksListComponent } from './books-list/books-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { MyNotesComponent } from './my-notes/my-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BooksListComponent,
    HomeComponent,
    PageNotFoundComponent,
    BookComponent,
    MyNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
