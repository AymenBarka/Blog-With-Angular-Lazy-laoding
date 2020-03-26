import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  list = [];
  cat: any;
  filter = [];
  constructor() { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('list'));

  }
  getStyle(img) {
    return {
      "background-image": 'url("' + img + '")',
      "background-position": 'center',
      "background-repeat": 'no-repeat',
      "background-size": 'cover'
    }
  }
  filterCategory(value) {
    if (this.filter.includes(value)){
      const index = this.filter.indexOf(value);
      this.filter.splice(index, 1);

    } else {
      this.filter.push(value);
    }
       const list = JSON.parse(localStorage.getItem('list'));
      if (this.filter.length !== 0) {
        this.list = list.filter(art => {
          if (this.filter.includes(art.categorie)) {
            return true;
          } else {
            return false;
          }
        });
      }


    }
  }
