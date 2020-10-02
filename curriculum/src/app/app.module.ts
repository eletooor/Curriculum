import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { DescargasComponent } from './descargas/descargas.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    DescripcionComponent,
    EstudiosComponent,
    ContactosComponent,
    DescargasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
