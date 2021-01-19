import { Component,OnInit } from '@angular/core';
import { User } from './modelo/user';
import {UserService} from './services/user.services';
import { Observable } from 'rxjs/Observable';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
  public title = 'cliente';
  public user: User;
  public identity;
  public token;
  public errorMessage

  constructor(
    private _UserService:UserService

  ){
    this.user=new User(0,'','','','','','');
  }
    public ngOnInit(){
      console.log('Entro en el ngOnInit');
      this.identity=this._UserService.getIdentity();
      this.token=this._UserService.getToken();
      console.log(this.identity);
      console.log(this.token);
      console.log(this.identity.nombre)
  }
  public onSubmit() {
    console.log('prueba de init');
    console.log(this.user);


    this._UserService.signup(this.user).subscribe(
      response =>{
        console.log(response);
        let identity=response.user;
        this.identity=identity;
    
        if (!identity){
          alert('error, problema desconocido')
        }else{
          
          localStorage.setItem('identity', JSON.stringify(identity))
          //conseguir token
          this._UserService.signup(this.user,true).subscribe(
            response =>{
             
              let token=response.token;
              this.token=token;
              if (!this.token){
                alert('error, token incorrecto')
              }else{
                //crear elemento en localstorage
                localStorage.setItem('token', token);
                //conseguir token
                console.log(token);
                console.log('identity');
                console.log(identity);
               
              }
            },
            error=>{
              var errorMessage = <any>error;
             // console.log('puto!!!');
              this.errorMessage =error;
              if (errorMessage != null) {
               
               // console.log(parsedError);
                this.errorMessage = error.error.msg;
              }
             
            }
          );
        }
      },
      error=>{
        var errorMessage = <any>error;
        console.log('puto!!!');
        this.errorMessage =error;
        if (errorMessage != null) {
         
         // console.log(parsedError);
          this.errorMessage = error.error.msg;
        }
       
      }
    );

  
     
  }

  public logout(){
    localStorage.clear;
    localStorage.removeItem('identity')
    localStorage.removeItem('token')
    localStorage.clear;
    this.identity=null;
    this.token=null;
  }
   

}
