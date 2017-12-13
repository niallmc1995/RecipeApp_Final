import { Response } from '@angular/http';

import { RecipequeryService } from './../services/recipequery.service';

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {
  
  private recipes: Array<Object>= [];
  private imageurl: string;
  private parameters: Params;
  private defaultResults: number = 0;


  constructor( private route: ActivatedRoute, private recipeservice: RecipequeryService) { }

  searchNew(event) {
    // Perform a search with fresh parameters
    this.defaultResults = 0;
    this.parameters = event;

     this.recipeservice.getSearchResults(event)
        .subscribe(
          (res) => {
         this.recipes = res.results;
         this.imageurl = res.baseUri;
        });
  }
  

  
  ngOnInit() {
    
  }

}
