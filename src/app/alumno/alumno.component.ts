import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
        /*nombre:String = 'miguel'
        apellido:String = 'caceda'

        nombre1 : string = ''
        apellido1 : string =''
        email1:string =''
        edad:Number = 40*/
        email:string = 'miguelcaceda@gmail.com'
        notas :number[] = [8,9,5,6]
        activo : boolean = true
        linkedin : string = 'https://www.google.com'

        diasTrabajados: number=0

        alumno:Alumno=new Alumno('miguel','caceda' ,40)



      

        esActivo():string{
          if(this.activo){
            return "trabajador activo"
          }else{
            return "trabajador inactivo"
          }
        }

        mediaNotas():number{
          let suma : number= 0.0;
          this.notas.forEach((element:number)=>{
            suma +=element;
          })
          return suma/this.notas.length
        }

        anadirDia():void{
          this.diasTrabajados++;
          console.log("aumenta")
        }

        disminuirDia():void{
          if(this.diasTrabajados > 0){
            this.diasTrabajados--;
          }
          console.log("disminuye")
        }

        /*crearCorreo():void {
          this.email1=this.nombre1+this.apellido1+ '@laum.es'
        }*/
}
