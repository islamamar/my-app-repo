import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import {Router} from '@angular/router' 
import  { AngularFireDatabase,AngularFireList} from 'angularfire2/database'; 

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {
 
  itemList:AngularFireList<any>; 
  itemarray=[] ; 

  data = {
 
    name : "" ,
    phone : "",
    skill : "", 
    city : "",
    price : "", 
    comments:""

  };

  constructor( public router : Router, public db: AngularFireDatabase) { 

   
    this.itemList = db.list('skills') ;  

    this.itemList.snapshotChanges().subscribe(actions=>{

      actions.forEach(action=>{
         let y = action.payload.toJSON() ; 
        // console.log(action.key  );  
        // console.log(action.payload.val())
         y['$key']= action.key;  
         this.itemarray.push(y as ListItemClass) ; 
       console.log(this.itemarray);
      })
    }) 
   }

  ngOnInit(): void {
  } 

  onEdit($key) {  
    console.log("editing ") 
    // console.log( "key : "+ $key + " name : "+ name +" phone : "+ phone+" skill : "+ skill +  " city :"+ city + "city "+" comments"+ comments); 
    console.log("new kkkkkk :"+$key);  
    console.log(this.itemList)
      this.itemList.update($key, {
        city :  this.data.city ,
        comments : this.data.comments ,
        name :this.data.name ,
        phone : this.data.phone ,
        price :this.data.price ,
        skill : this.data.skill ,         
     
      }   
        
        ) 
        this.itemarray=[] ;



  } 

  onDelete($key){ 
    // console.log("delete");   
    console.log("delete key is : "+ $key);
    this.itemList.remove($key); 
    this.itemarray = [] ; 
  }  

  
  onEditForm($key) { 
    console.log("mmmmm" +$key); 
    for(let value of this.itemarray)
    {  if ($key == value['$key'])
      // console.log(value['$key']) ;  
      {this.data.name = value['name'];       
        this.data.phone = value['phone'];     
        this.data.skill = value['skill'];    
        this.data.city = value['city'];  
        this.data.price = value['price'];  
        this.data.comments = value['comments'];  
      }      
    }
    }
  } 

export class ListItemClass{ 
  $key:string ; 
  name : string ;
    phone : string;
    skill : string ; 
    city : string; 
    price : string; 
    comments:string;


}
