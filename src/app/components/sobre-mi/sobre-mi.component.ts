import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  miportfolio: any;
  constructor(private datosportfolio:PortfolioService){}
  ngOnInit(): void{
    this.datosportfolio.obtener_datos().subscribe(datos => {
      this.miportfolio = datos;
    });
  };
}
