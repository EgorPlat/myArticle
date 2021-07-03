import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  
  public newDeliveryOrder = new BehaviorSubject<object>({});

  public sendOrderDeliveryToDataBase(order: object) {
     this.newDeliveryOrder.next(order);
     // затем будет отправка на север, когда он появится в реальном проекте
     // в сабджект добавляю , чтобы потом можно было вывести клиенту очередь его заказов на странице
  }
  constructor() { }
}
