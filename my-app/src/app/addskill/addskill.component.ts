import { Component, OnInit } from '@angular/core';
import  { AngularFireDatabase,AngularFireList} from 'angularfire2/database'; 
import { Observable } from 'rxjs';
import {Router} from '@angular/router'





@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit { 
  // name= " mohammad" ; 
  // phone = " "; 
  // skill = " "; 
  // city = " "; 
  // price = " ";  
  // seondname:string ; 
  // department:string = "mohammad";  


  itemList:AngularFireList<any>; 


  data = {
 
    name : "" ,
    phone : "",
    skill : "", 
    city : "",
    price : "", 
    comments:""

  };
    


  constructor( public db: AngularFireDatabase, public router:Router) {  
    
    this.itemList= db.list("skills") ; 

  } 

  ngOnInit(): void {  
    // console.log( this.seondname= "ayman" ); 
    console.log( this.data.name ); 
  
   

  } 


  insertskill()
  {
    this.itemList.push({
    name : this.data.name ,
    phone : this.data.phone,
    skill : this.data.skill, 
    city : this.data.city,
    price : this.data.price, 
    comments: this.data.comments

    })  
    this.router.navigate(['/myskill'])

  }


}
