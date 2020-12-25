import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillComponent } from './addskill/addskill.component'; 
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MyskillComponent } from './myskill/myskill.component';
import { SkillsComponent } from './skills/skills.component'; 
import { AngularFireModule } from 'angularfire2'; 
import { environment } from '../environments/environment'; 
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { Observable } from 'rxjs';




const appRoutes: Routes = [
  { path :'' , redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'addskill', component: AddskillComponent } ,
  { path: 'loginpage', component: LoginpageComponent } ,
  { path: 'regPage', component: RegisterPageComponent } ,
  { path: 'myskill', component: MyskillComponent } , 
  { path: 'skills', component: SkillsComponent } , 

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillComponent,
    LoginpageComponent,
    RegisterPageComponent,
    MyskillComponent,
    SkillsComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

