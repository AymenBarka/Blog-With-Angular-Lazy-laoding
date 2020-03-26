import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  addForm: FormGroup;
  index1: any;
  index: any;
  title: any;
  catégorie:any;
  liste: any[];
  constructor(private router:Router ,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params['index'];
    this.liste = JSON.parse(localStorage.getItem('list'))
    this.index1 = localStorage.getItem('indexConnecte')

    this.addForm = new FormGroup({
      title: new FormControl(this.liste[this.index].title, [Validators.required]),
      categorie: new FormControl(this.liste[this.index].categorie, [Validators.required]),
      content: new FormControl(this.liste[this.index].content,[Validators.required]),
      image: new FormControl(this.liste[this.index].img,[Validators.required]),
      owner: new FormControl(this.liste[this.index].owner,[Validators.required]),
    });
  }
  UpdateArticle(){
    this.liste[this.index1]= this.addForm.value
    localStorage.setItem('list', JSON.stringify(this.liste));
    this.router.navigateByUrl('/my-article');
  }
}
