import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  persona1: Persona = null;

  constructor(public personaService:PersonaService,private tokenService:TokenService) {
  }
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
        this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe((data) => {
      this.persona1 = data;
    });}

}
