import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  persona:Persona = null;

  constructor(private activatedRouter:ActivatedRoute,private personaservice:PersonaService,private router:Router,
    public imageS:ImageService){}

  ngOnInit(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaservice.detail(id).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona)
      }, err => {
        alert(err.error.mensaje);
        this.router.navigate(['']);
      }
    );
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageS.url;
    this.personaservice.update(id, this.persona).subscribe(
      data => {
        alert('Acerca de actualizada con exito');
        this.router.navigate(['']);
      },err => {
        alert('No se pudo actualizar la Acerca de');
      }

    );
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageS.uploadImage($event,name);
  }
}
