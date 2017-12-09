import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IRecipe } from '../products/recipes';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



// external api
// const headerDict = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
//   'X-Mashape-Key': '5VgdVNCpvXmshrewZN5LDldzgTv4p16kdIbjsngBGP2wGNdDvq',
//   'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.mashape.com',
// }

// const headerObj = {                                                                                                                                                                                 
//   headers: new Headers(headerDict), 
// };


@Injectable()
export class RecipeServiceService {
  private _recipeUrl = 'http://localhost:3000/recipes'

  constructor(private _http: HttpClient) {
    }
   getRecipes():Observable<IRecipe[]>{
    
        return this._http.get<IRecipe[]>(this._recipeUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      }
    
      private handleError(err:HttpErrorResponse){
        console.log(err.message)
        return Observable.throw(err.message);
}
}