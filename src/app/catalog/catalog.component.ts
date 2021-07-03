import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { BasketService } from '../basket.service';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private catalogService: CatalogService, private basketService: BasketService ) { }

  public catalog: any[] = [];
  public category: any[] = [];
  public filteredCatalog: any[] = [];
  public needItem: string = ''; 
  filter() {
    debounceTime(700);
    this.filteredCatalog = this.catalog.filter(data => data.name.toLowerCase().includes(this.needItem.toLocaleLowerCase()));
  }
  sort(name: string): any {
    this.filteredCatalog = this.catalog.filter(data => data.type === name);
  }
  addToBasket(item: any) {
    this.basketService.addProduct(item);
  }
  ngOnInit(): void {
    this.catalogService.getCatalog().subscribe( (response) => {
      this.catalog = JSON.parse(JSON.stringify(response));
      this.filteredCatalog = this.catalog;
    });
    this.catalogService.getCategory().subscribe( (response) => {
      this.category = JSON.parse(JSON.stringify(response));
    });
  }
}
