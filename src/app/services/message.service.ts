import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {}

  // 需要传递一个初始值
  private messageSource = new ReplaySubject<any>(3);

  message = this.messageSource.asObservable();

  sendMessage(message: any) {
    this.messageSource.next(message);
  }
}
