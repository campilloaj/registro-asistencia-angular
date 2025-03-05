import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

//context
import { UserService } from '../../context/user.service';

//environment
import { environment } from '../../environments/environment';

//interface
import { Auth, ResponseAuth } from '../../interfaces/auth.interface';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseUrl: string = environment.BASE_URL;

  constructor(private httpClient: HttpClient, public userService: UserService) { }
  
  public login(objReq: Auth): Observable<ResponseAuth>{
    return this.httpClient.post<ResponseAuth>(this.baseUrl + "login", objReq)
    .pipe(
      tap(res => { 
        console.log(res)
        localStorage.setItem("token", res.token)
        this.userService.user.userId =  res.userId;
        this.userService.user.username = res.username;
        //if(user.ckeck) {localStorage.setItem("email")}
        //else { if(localStorage.getItem('email')) localStorage.removeItem('email')}
       })
    );
    
  }

  public getDataCurrentUser(){

    return this.httpClient.post<ResponseAuth>(this.baseUrl + "CurrentUser", {})
    .pipe(
      tap(res => {
        localStorage.setItem("token", res.token)
        this.userService.user.userId =  res.userId;
        this.userService.user.username = res.username;
        this.userService.loadPage = true;
      })
    )
    
  }


}
