import { Component, OnInit } from '@angular/core'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database'; 
import {Router} from '@angular/router'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit { 
  email :string =" ";  
  password : string = " "; 

  constructor( private fire :AngularFireAuth ,  public router:Router) { }

  ngOnInit(): void {
  }


  onregister()
  {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(user=>{

      console.log(this.email,this.password);  
      this.router.navigate(['home']); 
    }).catch(error=>{
      console.error("error"); 
    })


} 
}
