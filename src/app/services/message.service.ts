import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {}

  // 需要传递一个初始值
  private messageSource = new BehaviorSubject<any>(null);

  message = this.messageSource.asObservable();

  sendMessage(message: any) {
    this.messageSource.next(message);
  }
}
