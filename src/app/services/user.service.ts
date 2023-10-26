import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../domain/users/user.model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService{

  apiUserUrl = 'http://localhost:8081/users/';

  constructor(private httpCliente: HttpClient) {
  }

  getAllUser(): Observable<UserModel[]>{
    return this.httpCliente.get<UserModel[]>(this.apiUserUrl);
  }

}
