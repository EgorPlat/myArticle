import { Injectable} from '@angular/core';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class PopularService  {
  
  public topFiveItems: any[] = [];
  public topFiveItemsName: string[] = [];
  public topFiveItemsLike: number[] = [];
  private preMax: number = 0;

  constructor(private catalogService: CatalogService) {}

  sortItemsFromCatalog() {
   this.catalogService.getCatalog().subscribe((catalog) => {
     this.topFiveItems = JSON.parse(JSON.stringify(catalog));

     setTimeout(()=>{
      this.topFiveItems.sort((prev: any, next: any): any => {
       if(prev.like > next.like){
         return -1;
       } else {
         return 1;
       }
      });
     },40);

     setTimeout(()=>{
      this.preMax = this.topFiveItems[5].like;
     },80);

     setTimeout(() => {
      this.topFiveItems = this.topFiveItems.filter(items => items.like > this.preMax);
     }, 120);

   });
  }
  filterSortedItemsToTopFive() {
    this.topFiveItemsName = this.topFiveItems.map((items) => items.name);
    this.topFiveItemsLike = this.topFiveItems.map((items) => items.like);
  }
}
