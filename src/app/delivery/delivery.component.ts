import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private deliveryService: DeliveryService) { }

  public userNameAtFormDelivery: string | null = localStorage.getItem('userName');
  public formDelivery: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userPhone: new FormControl(''),
    userAddress: new FormControl('')
  });
  public sendNewUserDeliveryOrder(name: string, phone: string, address: string) {
   let newDeliveryOrder = {
     name: name,
     phone: phone,
     address: address
   }
   this.deliveryService.sendOrderDeliveryToDataBase(newDeliveryOrder);
  }
  ngOnInit(): void {
    this.formDelivery = new FormGroup({
      "userName": new FormControl(this.userNameAtFormDelivery, [Validators.required]),
      "userPhone": new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      "userAddress": new FormControl(null, [Validators.required, Validators.minLength(15)])
    });
  }

}
