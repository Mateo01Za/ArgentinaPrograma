import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];
  constructor(private proyectoS: ProyectoService, private tokenService: TokenService) { }
  isLogged = false;
  newnombre: string = 'Nombre del proyecto';
  newdescripcion: string = 'descripcion del proyecto';
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  onCreate(): void{
   
    const proyectoC = new Proyecto(this.newnombre,this.newdescripcion, '');
    this.proyectoS.save(proyectoC).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.cargarProyecto();
      }, err =>{
        alert("falló");
        
      }
    )
  }
}
