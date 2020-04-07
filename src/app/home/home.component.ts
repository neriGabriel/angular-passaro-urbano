import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta }  from '../shared/oferta.model';
//PARA INJETAR UM SERVIO NO ANGULAR BASTA SOMENTE COLOCAR NO PROVIDERS DO COMPONENTE
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) {  }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas();
    this.ofertasService.getOfertas()
    .then( (ofertas: Array<Oferta>) => this.ofertas = ofertas)
    .catch( error => console.log(error) );
  }

}
