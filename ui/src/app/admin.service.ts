import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment.development';
import { Post } from './post';
import { PostEntity } from './postentity';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})
  };

  private paragraphUrl = "api/paragraphs";
  private goHome: Boolean = false;

  constructor(private http: HttpClient) { }

  addPost(post: Post): Observable<any> {
    return this.http.post(`${environment.API_URL}/${this.paragraphUrl}`, post, this.httpOptions).pipe(
      tap(_ => console.log('add new post request')),
      catchError(this.handleError<any>('addPost'))
    );
  }

  getPosts(): Observable<any> {
    return this.http.get(`${environment.API_URL}/${this.paragraphUrl}`).pipe(
      tap(v => console.log('getPost')),
      catchError(this.handleError<any>('getPost'))
    );
  }

  setGoHome(): void {
    this.goHome = true;
  }

  canGoHome(): Boolean {
    return this.goHome;
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
