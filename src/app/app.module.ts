import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { Alumno } from './models/alumno.model';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    AlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Alumno
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
