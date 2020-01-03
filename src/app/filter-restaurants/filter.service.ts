import { TagRestaurant } from './tagRestaurant.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class FilterService {
<<<<<<< Updated upstream
  selectedTypology: TagRestaurant[];
  searchText = '';
  selectedCount = 0;
=======
  selectedTypology: TagRestaurant[] = [
    {
    name: "",
    id: null,
    selected: false
    }
  ];
  searchText: string = "";
  tagSelected : string= "";
  selectedCount: number = 0;
>>>>>>> Stashed changes

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
    }
  ];

<<<<<<< Updated upstream
  constructor() {
    this.getSelectedTypology();
=======
  constructor() { 
>>>>>>> Stashed changes
  }

  getTypology() {
    return this.typology;
  }

  setSearchTerm(term: string) {
    this.searchText = term;
  }

  getSearchTerm() {
    return this.searchText;
  }

<<<<<<< Updated upstream
  // Getting Selected Games and Count
  getSelectedTypology() {
=======
  // Getting Selected Typo and Count
  getSelectedTypology(){
>>>>>>> Stashed changes
    this.selectedCount = 0;
    this.selectedTypology = this.typology.filter( g => {
      if (g.selected) {
      this.selectedCount++;
      }
      return (g.selected);
    });
  }
  setSelectedTypology(selectedTypology: TagRestaurant[]) {
    this.selectedTypology = selectedTypology;
  }


  // Delete Single Listed Game Tag
  deleteGame(id: number) {
    this.setSelectedTypology(this.getTypology().filter(g => {
      if (g.id == id) {
        g.selected = false;
      }
      return true;
    }));
    this.getSelectedTypology();
  }
}
