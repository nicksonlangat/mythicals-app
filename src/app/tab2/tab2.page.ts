import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mythicals : any;
  filterTerm: string;
  constructor() {}
  removeBookmark(mythical){
    this.mythicals.pop(mythical)
    localStorage.setItem('bookmarks', JSON.stringify(this.mythicals))
  }
  ngOnInit(){
    this.mythicals = JSON.parse(localStorage.getItem('bookmarks'))
  }
}
