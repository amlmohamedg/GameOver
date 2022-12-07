import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorFromlogin: string = '';




  loginForm:FormGroup=new FormGroup({
   
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
   
  })




  constructor(private _authService:AuthService,private _router:Router) { }


  ngOnInit(): void {
  }


  loginUser(form:FormGroup){
   
    console.log('hi',form);
     let x=form.get("first_name")?.getError("required");
     if(form.valid){
         // this.isLoading = true 
         this._authService.signIn(form.value).subscribe({
           next:(data:any)=>{ //console.log(data)
             if(data.message =="success"){
             //  this.isloading=false
             localStorage.setItem("token",data.token)
             this._authService.savedUser()
               this._router.navigate(['/home'])
              console.log("hi" , data);
              
             }else   {
               this.errorFromlogin=data.message
             }
             
     
     
     
           }
         })
         
     }
   }
   }
   



//}









  

 
  