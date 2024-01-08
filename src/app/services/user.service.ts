import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:5110/createuser';
  private apiUrlAllUsers = 'https://localhost:5110/allusers';

  constructor(private http: HttpClient) { }

  postCreateUser(userObject: UserI): Observable<any> {
    return this.http.post<UserI>(this.apiUrl, userObject);
  }

  getAllUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.apiUrlAllUsers);
  }

}
