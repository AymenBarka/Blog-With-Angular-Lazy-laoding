import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  index: any;
  article: any;
  addForm: FormGroup;
  commentaire: any[];
  user: any;
  title: any;
  submitted = false;
  liste: any[];
  list: any[]
  owner: any;
  index1: any;
  commentary: any[];
  date = new Date();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    this.index = this.activatedRoute.snapshot.params['index'];
    this.article = JSON.parse(localStorage.getItem('list'))[this.index]
    this.liste = JSON.parse(localStorage.getItem('listeUsers'))
    this.list = JSON.parse(localStorage.getItem('list'))
    this.index1 = localStorage.getItem('indexConnecte')
   

    this.addForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      title: new FormControl(this.list[this.index].title, [Validators.required]),
      owner: new FormControl(this.liste[this.index1].userName, [Validators.required]),
      date : new FormControl(new Date()),
    });
    this.getInformation();

    this.commentaire = this.commentaire.filter(item => {
      return ( item.title == this.article.title )
    })

  }
  addComment() {
    this.submitted = true;
    if (this.addForm.invalid) {
      alert("nooo");
    } else {
      this.commentaire.push(this.addForm.value);

      localStorage.setItem('commentary', JSON.stringify(this.commentaire));
    }

  }
  getInformation() {

    if (localStorage.getItem('commentary') === 'null' || localStorage.getItem('commentary') === null || !localStorage.getItem('commentary')) {
      this.commentaire = [];
    } else {
      this.commentaire = JSON.parse(localStorage.getItem('commentary'));
    }
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
