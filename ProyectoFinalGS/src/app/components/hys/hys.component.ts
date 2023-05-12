import { Component } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  skill: Skills[] = [];


  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }

  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    );
  }

  delete(id: number): void {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          alert('Skill eliminada con exito');
          this.cargarSkills();
        }, err => {
          alert('No se pudo eliminar la skill');
        }
      );
    }
  }
}
