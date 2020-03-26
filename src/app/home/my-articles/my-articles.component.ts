import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
  list = [];
  item:any
  title:any
  categorie:any
  userConnecter = JSON.parse(localStorage.getItem('listeUsers'));
   index = localStorage.getItem('indexConnecte');
  user: any;
  constructor() { }

  ngOnInit() {
    this.user=  this.userConnecter[this.index].userName

    this.list = JSON.parse(localStorage.getItem('list'));
    this.list = this.list.filter(item => {return (
      item.owner==this.user
    )})


  }
  deleteArticle(index){
    var list = JSON.parse(localStorage.getItem('list'))
    list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(list));
  }
  getStyle(img) {
    return {
     "background-image": 'url("'+ img +'")',
     "background-position": 'center',
     "background-repeat": 'no-repeat',
     "background-size": 'cover'
    }
  }

}
