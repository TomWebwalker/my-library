import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<{ name: string, authorName: string }> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ name: string, authorName: string }> {
    // console.log('ROUTE FROM RESOLVER', route);
    // console.log('STATE FROM RESOLVER', state);
    return of({
      name: 'Witcher',
      authorName: 'Andrzej Sapkowski',
    }).pipe(delay(3000));
  }
}
