import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserBasicModel} from "../domain/users/userBasic.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService{

    constructor(private http: HttpClient) { }

    getAllUsers() {
      return this.http.get<UserBasicModel[]>('http://localhost:8081/users/');
    }
}
