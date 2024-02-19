import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  constructor() {}

  public app_title!: string;

  public nom!: string;

  public color!: string;

  ngOnInit() {
    this.app_title = 'Exercice 1';
    this.nom = 'exercices 1';
    this.color = 'red';
  }
}
