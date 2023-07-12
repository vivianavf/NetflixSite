import { Component } from '@angular/core';
 //Importación de la interfaz
import { Moviedata } from '../interfaces/moviedata';

 //Importación del servicio
import { DataproviderService } from '../providers/dataprovider.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //Atributo con el tipo de dato de la interfaz
  public data : Moviedata[] = [];
	  

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataproviderService) { }

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Moviedata[]).slice(0,2); //uso slice para traer 2 datos, si quiero todos dejo sin slice
    })
  }
}
