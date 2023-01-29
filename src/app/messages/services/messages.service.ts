import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$: BehaviorSubject<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Message[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages`)
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public update(message: Message): Observable<Message> {
    return this.httpClient
      .put<Message>(`${this.urlApi}/messages/${message.id}`, message)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient
      .post<Message>(`${this.urlApi}/messages`, message)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  public getItemById(id: number): Observable<Message> {
    return this.httpClient.get<Message>(`${this.urlApi}/messages/${id}`);
  }

  public getItemByCanalId(idCanal: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.urlApi}/messages?idCanal=${idCanal}`);
  }

  public deleteItem(id: number): Observable<Message> {
    return this.httpClient
      .delete<Message>(`${this.urlApi}/messages/${id}`)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }
}
