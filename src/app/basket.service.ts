import { filter, map, tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

export type Product = {
  name: string,
  article: number;
  price: number;
  description: string;
  type: string; 
  photo: string;
  discount: boolean; 
  like: number;
  solo_like: boolean; 
  country: string; 
  is_here: boolean;
  moreImage: [
    { img1: string },
    { img2: string }
  ]
};

export type BasketItem = Product & { basketId: number };

export class BasketService {
  
  private newBasketItem$: BehaviorSubject<BasketItem[]>;
  public _newBasketItem$: Observable<BasketItem[]>;
  public countBasketItem$: BehaviorSubject<number>;
  private localIdOfBasketItem: BehaviorSubject<number[]>;

  constructor() {
    this.newBasketItem$ = new BehaviorSubject([] as BasketItem[]);
    this._newBasketItem$ = this.newBasketItem$.asObservable();
    this.countBasketItem$ = new BehaviorSubject(0);
    this.localIdOfBasketItem = new BehaviorSubject([] as number[]);
  }
  addProduct(item: BasketItem) {
    item.basketId = 1;
    this.newBasketItem$.next([...this.newBasketItem$.getValue(), item]);
    this.countBasketItem$.next(this.countBasketItem$.getValue() + item.price);

    this.localIdOfBasketItem.next([...this.localIdOfBasketItem.getValue(), item.article]);
    localStorage.setItem("localBasketId", JSON.stringify(this.localIdOfBasketItem.getValue()));
  }
  removeProduct(item: any) {
    this.newBasketItem$.next(this.newBasketItem$.getValue().filter(items => items.article !== item.article));
    this.countBasketItem$.next(this.countBasketItem$.getValue() - item.price);
  }
  getMoreImageOfItem(item: Product) {
    return item.moreImage;
  }
}