import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  nombreP: string = '';
  descripcionP: string = '';
  urlP: string = '';
  imgP: string = '';

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.urlP, this.imgP);
    this.proyectoS.save(proy).subscribe(
      data => {
        alert('Proyecto creado con exito');
        console.log(proy)
        this.router.navigate(['']);
      }, err => {
        alert("fallo al crear el proyecto");
        this.router.navigate(['']);
      }
    );
  }
}
