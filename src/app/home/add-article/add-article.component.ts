import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  addForm: FormGroup;
  index: any;
  userConnecter: any;
  verif = false;
  registration: any[];
  liste: any[];
  submitted = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.index = localStorage.getItem('indexConnecte')
    this.liste = JSON.parse(localStorage.getItem('listeUsers'))
    this.addForm = new FormGroup({
      categorie: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      owner: new FormControl(this.liste[this.index].userName, [Validators.required]),
    });
    this.getInformation();
  }


  addArticle() {
    this.submitted = true;
    if (this.addForm.invalid) {
      alert("nooo");
    } else {
      this.registration.push(this.addForm.value);
      localStorage.setItem('list', JSON.stringify(this.registration));
      this.router.navigateByUrl('/all-articles');
    }

  }
  getInformation() {

    if (localStorage.getItem('list') === null) {
      this.registration = [];
    } else {
      this.registration = JSON.parse(localStorage.getItem('list'));
    }
  }
  verifTitle() {
    if (!this.registration) {
      this.registration = [];
    }
    console.log(this.addForm.controls);
    this.verif = false;
    for (let i = 0; i < this.registration.length; i++) {
      if (this.registration[i].title == this.addForm.value.title) {
        this.verif = true;
      }
    }
    if (this.verif) {
      this.addForm.controls['title'].setErrors({ valid: false });
    } else {
      this.addForm.controls['title'].updateValueAndValidity();
    }
  }
  getImage(event) {
    console.log(event.target.files[0]);
    var reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      console.log(event.target.result)
      this.addForm.controls['img'].setValue(event.target.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  }

}
