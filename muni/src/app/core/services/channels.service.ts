import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Channel } from '../models/channel';
@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  private urlApi: string;
  public collection$: Observable<Channel[]>;
  public channelCollection$!: BehaviorSubject<Channel[]>;
  public channelMess$!: BehaviorSubject<Channel>;
  public channel: Channel;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.channel = new Channel();
    this.channelMess$ = new BehaviorSubject<Channel>(this.channel);
    this.collection$ = this.httpClient.get<Channel[]>(
      `${this.urlApi}/channels`
    );
  }

  public getChanById(id: number) {
    return this.httpClient
      .get<Channel>(`${this.urlApi}/channels/${id}`)
      .subscribe((data) => {
        this.channelMess$.next(data);
      });
  }

  public add(channel: Channel): Observable<Channel> {
    console.log(channel);
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, channel);
  }

 /* public put(channel: Channel, id: number): Observable<Channel> {
    return this.httpClient.put<Channel>(`${this.urlApi}/channel/${id}`, channel);
    console.log(channel);
  }*/

  public put(channel: Channel): Observable<Channel> {
    return this.httpClient.put<Channel>(`${this.urlApi}/channel/5`, channel);
    console.log(channel);
  }

}
