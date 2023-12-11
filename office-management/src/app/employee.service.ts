import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }

  private baseUrl: string = "https://6572df5d192318b7db412dfe.mockapi.io/employees";

  getEmployees():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  createEmployees(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }
}
