import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miportfolio: any;
  constructor(private datosportfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosportfolio.obtener_datos().subscribe(datos => {
      console.log("datos encabezado");
      console.log(datos);
      this.miportfolio = datos; //data[0] ? 
    });
  };
}
