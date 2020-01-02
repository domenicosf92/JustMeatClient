import { TagRestaurant } from './tagRestaurant.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class FilterService {
    name: String;
  selectedTypology: TagRestaurant[];
  searchText: String = "";
  selectedCount: number = 0;

  typology = [
    {
      name: 'Pizzeria',
      id: 1,
      selected: false
    },
    {
      name: 'Ristorante',
      id: 2,
      selected: false
    },
    {
      name: 'Hamburgeria',
      id: 3,
      selected: false
    },
    {
      name: 'Panineria',
      id: 4,
      selected: false
    },
    {
      name: 'Sushi',
      id: 5,
      selected: false
    },
    {
      name: 'Kebab',
      id: 6,
      selected: false
    },
    {
      name: 'Toasteria',
      id: 7,
      selected: false
    }
  ]

  constructor() { 
    this.getSelectedTypology();
  }

  getTypology(){
    return this.typology;
  }

  setSearchTerm(term:String){
    this.searchText = term;
  }
  
  getSearchTerm(){
    return this.searchText;
  }

  // Getting Selected Games and Count
  getSelectedTypology(){
    this.selectedCount = 0;
    this.selectedTypology = this.typology.filter( g => {
      if(g.selected)
      this.selectedCount++;
      return (g.selected);
    });
  }
  setSelectedTypology(selectedTypology:TagRestaurant[]){
    this.selectedTypology = selectedTypology;
  }
 
 
  //Delete Single Listed Game Tag
  deleteGame(id: number) {
    this.setSelectedTypology(this.getTypology().filter(g => {
      if (g.id == id)
        g.selected = false;
 
      return true;
    }));
    this.getSelectedTypology();
  }
 
  //Clear term types by user
  clearFilter(){
    this.selectedCount = 0;
    this.selectedTypology = this.typology.filter( g => {
      g.selected = false;
      return (g.selected);
    });
  }

  clearSelection(){
    this.searchText = "";
  }
}