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
  public channelMess$!: BehaviorSubject<Message[]>;
  private channelId: number;

  constructor(private httpClient: HttpClient, route: ActivatedRoute) {
    this.channelId = route.snapshot.params['id'];
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Message[]>([]);
    this.channelMess$ = new BehaviorSubject<Message[]>([]);

    this.getByChannel(1);
  }
  /*
  public refreshMessage(): void {
    this.httpClient.get<Message[]>(
      `${this.urlApi}/messages`
    ).subscribe((data)=> {
      this.collection$.next(data);
    })
  }*/

  public getByChannel(IdChannel: number) {
    this.httpClient
      .get<Message[]>(`${this.urlApi}/messages/channel/${IdChannel}`)
      .subscribe((data) => {
        this.channelMess$.next(data);
        console.log(data);
      });
  }

  public add(message: Message): Observable<Message> {
    console.log(message);
    return this.httpClient
      .post<Message>(`${this.urlApi}/messages`, message)
      .pipe(
        tap(() => {
          this.getByChannel(message.channel.id);
        })
      );
  }

  public put(message: Message): Observable<Message> {
    return this.httpClient
      .put<Message>(`${this.urlApi}/messages/5`, message)
      .pipe(
        tap(() => {
          this.getByChannel(message.channel.id);
        })
      );
    console.log(message);
  }
}
