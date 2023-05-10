import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http:HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+'traer/perfil')
  }

}
