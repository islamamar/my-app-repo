import { Component, OnInit } from '@angular/core'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database'; 
import {Router} from '@angular/router'


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit { 
  email: string =" ";  
  password : string =" "; 

  constructor( private fire:AngularFireAuth, private router : Router) {

   }

  ngOnInit(): void {
  } 

  onLogin()
  {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(user=>{

      console.log(this.email,this.password);  
      this.router.navigate(['home']); 
    }).catch(error=>{
      console.error("error"); 
    })

    
  }


}
