import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$: Observable<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Message[]>(
      `${this.urlApi}/messages`
    );

    console.log(this.collection$);
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.urlApi}/messages`, message);
  }
}
