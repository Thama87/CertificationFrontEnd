import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private urlApi: string;
  public collection$!: BehaviorSubject<Message[]>;
  private channelId: number;


  constructor(private httpClient: HttpClient, route: ActivatedRoute) {
    this.channelId = route.snapshot.params['id'];
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

  public getByChannel(IdChannel: number) {
    this.channelId=IdChannel;
    return this.httpClient.get<Message[]>(`${this.urlApi}/messages/channel/${this.channelId}`);
  }

  public add(message: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.urlApi}/messages`, message).pipe(
      tap(()=>{
        this.refreshMessage();
      } )
    )
  }

  public put(message: Message): Observable<Message> {
    return this.httpClient.put<Message>(`${this.urlApi}/messages/5`, message).pipe(
      tap(()=>{
        this.refreshMessage();
      } )
    )
    console.log(message);
  }
}
