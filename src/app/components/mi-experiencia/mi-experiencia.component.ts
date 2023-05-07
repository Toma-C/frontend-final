import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-mi-experiencia',
  templateUrl: './mi-experiencia.component.html',
  styleUrls: ['./mi-experiencia.component.css']
})
export class MiExperienciaComponent {
  listaExp: any;
  constructor(private datosportfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosportfolio.obtener_datos().subscribe(datos => {
      this.listaExp = datos.experiencias;
    });
  };
}
