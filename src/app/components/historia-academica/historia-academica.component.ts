import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-historia-academica',
  templateUrl: './historia-academica.component.html',
  styleUrls: ['./historia-academica.component.css']
})
export class HistoriaAcademicaComponent {
  listaEducacion: any;
  constructor(private datosportfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosportfolio.obtener_datos().subscribe(datos => {
      console.log("educacion recibida");
      console.log(datos.educaciones);
      this.listaEducacion = datos.educaciones;
    });
  };
}
