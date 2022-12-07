import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // errorfromsignUP:String=''
  errorFromSignUp: string = '';
  isloading:boolean=false


  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    age:new FormControl(null,[Validators.required,Validators.min(15),Validators.max(30)]),

  })
  
  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(form:FormGroup){
   
 console.log('hi',form);
  let x=form.get("first_name")?.getError("required");
  if(form.valid){
    this.isloading=true
      this._authService.signUp(form.value).subscribe({
        next:(data:any)=>{ //console.log(data)
          if(data.message =="success"){
            this.isloading=false
           this._router.navigate(['/login'])
           console.log("hi" , data);
           
          }else   {
            this.errorFromSignUp=data.message
          }
          
  
  
  
        }
      })
      
  }
}
}

