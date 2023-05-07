import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HistoriaAcademicaComponent } from './components/historia-academica/historia-academica.component';
import { MiExperienciaComponent } from './components/mi-experiencia/mi-experiencia.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    MainContainerComponent,
    SobreMiComponent,
    HistoriaAcademicaComponent,
    MiExperienciaComponent,
    MisProyectosComponent,
    LoginComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [PortfolioService,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
