import { RecipequeryService } from './../services/recipequery.service';

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit, OnChanges{
// Rowan - inputs from advanced search 
  @Input() recipes: Array<Object>;
  @Input() title: string = '';
  @Input() imageurl: string = 'https://spoonacular.com/recipeImages/';


  @Output() update: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(recipes) {
    if (recipes) {
      this.update.emit(this.recipes);
    }
  }

 

}