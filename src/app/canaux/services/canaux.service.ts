import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Canal } from '../models/canal';

@Injectable({
  providedIn: 'root',
})
export class CanauxService {
  private urlApi: string;
  public collection$: BehaviorSubject<Canal[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Canal[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient.get<Canal[]>(`${this.urlApi}/canaux`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public update(canal: Canal): Observable<Canal> {
    return this.httpClient
      .put<Canal>(`${this.urlApi}/canaux/${canal.id}`, canal)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  public add(canal: Canal): Observable<Canal> {
    return this.httpClient.post<Canal>(`${this.urlApi}/canaux`, canal).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: number): Observable<Canal> {
    return this.httpClient.get<Canal>(`${this.urlApi}/canaux/${id}`);
  }

  public deleteItem(id: number): Observable<Canal> {
    return this.httpClient.delete<Canal>(`${this.urlApi}/canaux/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
