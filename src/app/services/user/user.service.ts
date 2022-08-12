import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  //
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
    
  userRegister(data: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.httpService.postService('users/registration', data, false, header)
  }

  userLogin(data: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair

      })
    }
    return this.httpService.postService('login', data, false, header)
  }

}
