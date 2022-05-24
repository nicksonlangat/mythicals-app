import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  getMythicals(){
    return this.http.get(this.base_url);
  }

}
