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
  public collection$!: BehaviorSubject<Message[]>;


  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Message[]>([]);

    this.refreshMessage();
  }

  public refreshMessage(): void {
    this.httpClient.get<Message[]>(
      `${this.urlApi}/messages`
    ).subscribe((data)=> {
      this.collection$.next(data);
    })
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.urlApi}/messages`, message).pipe(
      tap(()=>{
        this.refreshMessage();
      } )
    )
  }
}
