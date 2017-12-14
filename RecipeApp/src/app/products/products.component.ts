import { Component, OnInit } from '@angular/core';
import { IRecipe } from './product';
import {RecipeServiceService} from '../services/recipe-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  // Niall, David, Rowan - Toggle image & Instructions and subscribe to RESTful API Receipes

  imageWidth: number = 150;
  imageHeight: number = 80;
  imageMargin: number = 2;
  showImage: boolean = true;
  showInstructions: boolean = false;
  errorMessage: string;
  
  _listFilter: string;
  get listFilter(): string{
      return this._listFilter;
  }
  
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredRecipes = this.listFilter ? this.performFilter(this.listFilter):this.recipes;
  }
  filteredRecipes: IRecipe [];
  recipes: IRecipe[];



//used for dummy data
  // constructor() { 
  //   this.filteredRecipes = this.recipes;
  // }

  //to be used in RESTful API to MongoDB database
  constructor(private _recipeService:RecipeServiceService) {}

  performFilter(filterBy:string):IRecipe[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe:IRecipe)=> recipe.recipeName.toLocaleLowerCase().indexOf(filterBy) != -1);
}

  toggleImage():void{
  this.showImage = !this.showImage;
}
toggleInstructions(){
    this.showInstructions = !this.showInstructions;
  }

//used in RESTful API
public ngOnInit():void {
    this._recipeService.getRecipes().subscribe(recipes =>{
        this.recipes = recipes
        this.filteredRecipes = this.recipes;
    },
    error => this.errorMessage = <any>error);
    }
  
// ngOnInit(){
// }
}
