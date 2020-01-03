import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter-restaurants',
  templateUrl: './filter-restaurants.component.html',
  styleUrls: ['./filter-restaurants.component.css']
})
export class FilterRestaurantsComponent implements OnInit {

  constructor(public filterService: FilterService) { }

  ngOnInit() {
    this.filterService.getSelectedTypology();
  }

}
