import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public trending = [
    {
      "cover":"../assets/3.jfif",
      "title":"dinosaurs"
    },
    {
      "cover":"../assets/earth.jpg",
      "title":"blade"
    },
    {
      "cover":"../assets/malenia.jpg",
      "title":"malenia"
    },
    {
      "cover":"../assets/barones.jpg",
      "title":"barones"
    },
    {
      "cover":"../assets/secretportal.jpg",
      "title":"secret portal"
    }
  ]
  public posts = [
    {
      "cover":"../assets/4.jfif",
      "title":"unicorns"
    },
    {
      "cover":"../assets/unicorns.jpg",
      "title":"unicorns"
    },
    {
      "cover":"../assets/dominator.jpg",
      "title":"dominator"
    },
    {
      "cover":"../assets/elden.jpg",
      "title":"elden ring"
    },
    {
      "cover":"../assets/linch.jpg",
      "title":"linch king"
    },
    {
      "cover":"../assets/space1.png",
      "title":"foundation"
    }
  ]
  mythicals: any = [];
  filterTerm: string;
  favourites = [];
  bookmarks = [];
  constructor(private api: ApiService) {}
  addFavourite(mythical){
    this.favourites.push(mythical)
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }
  addBookmark(mythical){
    this.bookmarks.push(mythical)
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
  }
  ngOnInit(){
    this.api.getMythicals().subscribe(res=>{
      this.mythicals = res
      console.log(this.mythicals)
    })
  }

}
