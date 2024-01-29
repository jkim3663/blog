import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private userInfoUrl = 'api/usr/check';

  private isValidUser: Boolean = false;

  constructor(private http: HttpClient) {}


  getUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${environment.API_URL}/${this.userInfoUrl}`, user, this.httpOptions).pipe(
      tap(_ => console.log('fetched user info')),
      map(value => this.isValidUser = value),
      catchError(this.handleError<boolean>('getUser'))
    );
  }

  isAuthenticated(): Boolean {
    return this.isValidUser;
  }

  cleanData(): void {
    this.isValidUser = false;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error : any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
