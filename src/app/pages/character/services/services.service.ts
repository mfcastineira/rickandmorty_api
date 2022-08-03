import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl:string= "https://rickandmortyapi.com/api/character";



  constructor(private http:HttpClient) { }

  public getCharacters(){

    return this.http.get(this.baseUrl);

  };
 
}
