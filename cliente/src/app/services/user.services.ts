import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
import {GLOBAL} from './global';
 
@Injectable()
export class UserService{
    public identity;
    public token;
    public url :string;
    constructor(private _http:HttpClient ){
        this.url =GLOBAL.url;
    }
    signup(userToLogin, gethash=null):Observable<any> {
        if(gethash!=null){
            userToLogin.getHash =gethash;
        }
        let params =JSON.stringify(userToLogin);   
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this._http.post(this.url+'login',params,{headers:headers}) 
    }
 
    getIdentity(){
        let identity=JSON.parse(localStorage.getItem('identity'));
        if (identity!='undefined'){
            this.identity=identity;
        }
        else{
            this.identity=null;
        }//ok
        return this.identity;
    }
    getToken(){
        let token=JSON.parse(localStorage.getItem('token'));
        if (token!='undefined'){
            this.token=token;
        }
        else{
            this.token=null
        } 
        return this.token;
    }
}