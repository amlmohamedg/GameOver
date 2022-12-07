import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin:boolean= false

  constructor(private _auth:AuthService) { 
   
    this._auth.userData.subscribe({
      next:(data:any)=>{
        if(this._auth.userData.getValue()) {
          this.islogin=true
        }else{
          this.islogin=false
        }
        //console.log(data,"hello from navbar");
      }
      
    })
    
  }

  
 

  ngOnInit(): void {
  }

  logOut(){
    this._auth.logOut()
  }
  


}


