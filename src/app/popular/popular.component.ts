import { Component, OnInit } from '@angular/core';
import { PopularService } from '../popular.service';
import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { CatalogService } from '../catalog.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  
  constructor(private popularService: PopularService, private catalogService: CatalogService) { }

  public mychart: any; 
  public chart: any;

  ngOnInit(): void {
    Chart.register(BarController, CategoryScale, LineController, LinearScale, BarElement)
    setTimeout(() => {
    this.mychart = document.getElementById("canvas");
    this.chart = this.mychart.getContext("2d");
    this.chart = new Chart('canvas',{
      type: "bar",
      data: {
        labels: this.popularService.topFiveItemsName.reverse(),
        datasets: [{
          data: this.popularService.topFiveItemsLike.reverse(),
          backgroundColor: "blue",
          borderColor: "grey",
        }]
      }
    });
    }, 270);  
      this.popularService.sortItemsFromCatalog();
    setTimeout(()=>{
      this.popularService.filterSortedItemsToTopFive();
    },260);
  };
}
