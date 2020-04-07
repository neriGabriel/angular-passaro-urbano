import { Oferta } from './shared/oferta.model';
//PRECISA IMPORTAR PARA USAR AQUI
import { HttpClient } from '@angular/common/http';
//PRECISA IMPORTAR PRA TER ACESSO
import { Injectable } from '@angular/core';

//PARA IMPORTAR UM SERVIÇO DENTRO DE OUTRO SERVIÇO PRECISA USAR O INJECTABLE
// .TOPROMISE PARA TRANSFORMAR EM PROMESSA PQ O HTTP.GET RETORNA UM OBSERVABLE
@Injectable()
export class OfertasService {
    public ofertas : Array<Oferta>;

    constructor(private http: HttpClient) {}

    public getOfertas() : Promise<Array<Oferta>> {
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then( (resposta: any) => resposta)
    }

   
}