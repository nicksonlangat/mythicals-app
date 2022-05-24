import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  mythicals : any;
  filterTerm: string;
  constructor() {}
  removeFavourite(mythical){
    this.mythicals.pop(mythical)
    localStorage.setItem('favourites', JSON.stringify(this.mythicals))
  }
  ngOnInit(){
    this.mythicals = JSON.parse(localStorage.getItem('favourites'))
  }
}