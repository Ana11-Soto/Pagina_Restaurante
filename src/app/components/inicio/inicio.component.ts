import { Component, OnInit } from '@angular/core';
import {ComidasService} from '../../servicios/comidas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  posts: any;

  constructor(
    private comidasService: ComidasService
  ) { }

  ngOnInit(): void {
this.comidasService.getPosts()
.subscribe((posts) => {
  this.posts = posts;
}); 
  

  }
  
}
