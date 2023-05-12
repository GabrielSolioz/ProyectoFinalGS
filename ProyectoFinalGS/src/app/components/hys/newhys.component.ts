import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent {
  nombre: string;
  porcentaje: number;
  imagen: string;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje, this.imagen);
    this.skillS.save(skill).subscribe(
      data => {
        alert('Skill creada con exito');
        this.router.navigate(['']);
      },
      err => {
        alert('No se pudo crear la skill');
        this.router.navigate(['']);
      }
    )
  }
}
