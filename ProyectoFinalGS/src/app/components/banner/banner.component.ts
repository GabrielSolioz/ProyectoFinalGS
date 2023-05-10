import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  Persona: Persona = new Persona("","","");

  constructor(public personaService:PersonaService){}

  ngOnInit(){
    this.personaService.getPersona().subscribe(data => {this.Persona = data})
  }

}
