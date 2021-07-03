import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html', 
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public visibility: boolean = true;
  public moreImage: any[] = [
    {img1: ''},
    {img2: ''}
  ];

  constructor(
    public basketService: BasketService,
    private router: Router
    ) { }
  
  openDialog(item: any) {
   this.visibility = false;
   this.moreImage = this.basketService.getMoreImageOfItem(item);
  }
  closeDialog() {
    this.visibility = true;
  }
  removeItem(item: any) {
    this.basketService.removeProduct(item);
  }
  deliveryMenu() {
    this.router.navigate(['wall/basket/delivery']);
  }
  ngOnInit(): void {
    this.basketService._newBasketItem$.subscribe((observer) => {
      console.log(observer);
    })
  } 

}

