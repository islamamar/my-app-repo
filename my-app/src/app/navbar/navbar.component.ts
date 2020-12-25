import { Component, OnInit } from '@angular/core'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database'; 
import {Router} from '@angular/router'  
import { Observable } from 'rxjs/Observable'; 
import * as firebase from 'firebase/app'; 









@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  user:Observable  <firebase.User>;   
  
   private isloggedin:Boolean = false;  
   private email:string ; 

  


  constructor(public afAuth : AngularFireAuth , public router: Router) {
    this.user=afAuth.authState;  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in. 
        this.isloggedin = true;         

      } else {
        // No user is signed in.  
        this.isloggedin= false;   
        this.router.navigate(["/myskill"]); 
        
      }
    });
   }

  ngOnInit(): void {
  } 
  
  logout() {
    this.afAuth.auth.signOut();
    this.isloggedin= false; 

  }

}
