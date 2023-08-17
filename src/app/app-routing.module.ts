import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BooksListComponent} from "./books-list/books-list.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BookComponent} from "./book/book.component";
import {BookResolver} from "./book.resolver";
import {MyNotesComponent} from "./my-notes/my-notes.component";
import {AuthUserGuard} from "./auth-user.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BooksListComponent,
    title: 'Books',
    children: [
      {
        path: 'book-item/:id',
        component: BookComponent,
        resolve: {
          book: BookResolver,
        },
      }
    ],
  },
  {
    path: 'authors',
    title: 'Authors',
    loadComponent: () => import('./authors/authors.component'),
  },
  {
    path: 'my-notes',
    title: 'My Notes',
    component: MyNotesComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
