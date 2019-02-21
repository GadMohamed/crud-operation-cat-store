import { Component, OnInit } from '@angular/core';
import { CatsService } from '../shared/cats.service';
import { Catsclass } from '../shared/catsclass.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service :CatsService) { }

  

  list:Catsclass[];


  ngOnInit() {

    this.restForm();

   this.list =  this.service.getCats();

  }

  restForm(form?:NgForm)
  {
    if(form != null)
    form.resetForm();
    this.service.formData = {

      catId:'',
      catSpecial:'',
      catInfo:'',
      catPrice:'',
      catImage:'',

    }
  }


  onSubmit(form:NgForm)
  {
     //let data = form.value;
     //let key = data.catId;
    // localStorage.setItem(key, JSON.stringify(data));
    // this.restForm(form);
    
    
  }

}
