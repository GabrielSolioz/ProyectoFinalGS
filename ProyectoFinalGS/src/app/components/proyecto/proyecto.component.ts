import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyecto: Proyecto[] = [];
  isLogged = false;

  constructor(private sProyecto: ProyectoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sProyecto.lista().subscribe(
      data => {
        this.proyecto = data;
      });
  }

  delete(id: number): void {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        data => {
          alert('Proyecto eliminado con exito');
          this.cargarProyectos();
        }, err => {
          alert('No se pudo eliminar el proyecto');
        }
      );
    }
  }
}
