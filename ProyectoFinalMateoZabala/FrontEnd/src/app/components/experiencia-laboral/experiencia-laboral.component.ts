import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
  isLogged = false;

  newnombre: string = 'Nombre de la experiencia';
  newdescripcion: string = 'descripcion de la experiencia';

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;});
    
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia()
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  onCreate(): void{
   
    const experienciaC = new Experiencia(this.newnombre,this.newdescripcion );
    this.sExperiencia.save(experienciaC).subscribe(
      data =>{
        alert("Experiencia añadido correctamente");
        this.cargarExperiencia();
      }, err =>{
        alert("falló");
        
      }
    )
  }
}

