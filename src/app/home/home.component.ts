import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   name : string = "";
   text : string = "";
   date : Date;
   time : Time; 

  // model : string = "";
  // ps: number;
  // year: number;

  destinations = [
    {
      name: "Rio de Janeiro",
      date: "01/16/2016",
      time: "16:00:00",
      shortDescr: "Rio de Janeiro (/ˈriːoʊ di ʒəˈnɛəroʊ, - deɪ -, - də -/; Portuguese: [ˈʁi.u d(ʒi) ʒɐˈne(j)ɾu] (About this soundlisten);[3]), or simply Rio,[4] is anchor to the Rio de Janeiro metropolitan area and the second-most populous municipality in Brazil and the sixth-most populous in the Americas. Rio de Janeiro is the capital of the state of Rio de Janeiro, Brazil's third-most populous state, after São Paulo and Minas Gerais",
      img: "https://cdn.pixabay.com/photo/2012/07/03/22/55/rio-de-janeiro-51320_1280.jpg"
    },{
      name: "Cataratas de Iguazu",
      date: "21.2.2016",
      time: "16:00:00",
      shortDescr: "Iguazú Falls or Iguaçu Falls (Spanish: Cataratas del Iguazú [kataˈɾatas ðel iɣwaˈsu]; Guarani: Chororo Yguasu [ɕoɾoɾo ɨɣʷasu]; Portuguese: Cataratas do Iguaçu [kataˈɾatɐs du iɡwaˈsu]) are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.",
      img: "https://cdn.pixabay.com/photo/2020/04/13/22/23/waterfall-5040217_1280.jpg"
    },{
    name: "Machu Picchu",
    date: "21.2.2014",
    time: "16:00:00",
    shortDescr: "Machu Picchu is an old Inca  site  located in the mountains of Peru, about 80 kilometres northwest of Cusco.  Archaeologists think that Machu Picchu was built as a home for the  emperor  of the Incas, a civilization that lived there before Columbus  discovered  America. The site is often called the Lost City of the Incas.",
    img: "https://cdn.pixabay.com/photo/2014/03/30/23/07/mountain-301715_1280.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
