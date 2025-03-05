import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   loadPage = false;

   user = {
    username:"",
    userId:""
  }

  constructor() { }
}
