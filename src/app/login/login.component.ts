
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../admin/service/login.service';
import { AppRoutingConstants, RoutingModulesConstatnt } from '../constant';
import { Subscription } from 'rxjs';
import { Login } from '../login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  public subs : Subscription []=[]
  login : Login;
  public loginForm: FormGroup;
  disbaleLoginButton: boolean = false;
  submitted = false;
  UserName: '';
  Password :'';
  employee: any;
  user='1';
  


  constructor( private router: Router, private loginService: LoginService

  ) {

    this.login =new Login();
   }

  
  ngOnInit(): void {
 
     localStorage.setItem('SessionUser',this.user);

    this.loginForm = new FormGroup({

      loginUserName: new FormControl(['',Validators.required]),
      loginPassword:new FormControl (['',Validators.required])
    });

  } 

get loginUserName1(){
  
   return this.loginForm.get('loginUserName');
}

get password(){
  return this.loginForm.get('loginPassword');
}
 


  onSubmit(){

    this.loginData();
  //  if(this.validationUser()){
  //   this.loginData();
   
  //  }
   
  }

  clearData(){
     this.UserName='';
     this.Password='';
  }



  loginData(){

  this.submitted=true
  

  this.disbaleLoginButton = true;
  
  this.subs.push(this.loginService.validateUser(this.UserName,this.Password).subscribe(
      loginModel => {

        if(!loginModel){
         
          this.router.navigate(['/', AppRoutingConstants.loginPage]);
          alert("Username or Passord is not valid");
      //    this.clearData();
        
         
        }
        else{
          this.router.navigate(['/','employee']);
        }
    
        
      },
      error =>{

        console.log(error);

        this.disbaleLoginButton =false;

     }) );

    
  }
  ngOnDestroy() {
   
    this.subs.forEach( subscription => {subscription.unsubscribe()
   
     console.log(subscription)  
   });
   
   
  }


  validationUser(){
   
    if (!this.login.loginUserName.trim()) {
      alert("Please enter name")
      return false;
    }
 
    this.login.loginUserName = this.login.loginUserName.trim();

    if (this.login.loginUserName.length <= 1) {
      alert("Name should be between 2 to 15 characters")
      return false;
    }
  }


   
}



