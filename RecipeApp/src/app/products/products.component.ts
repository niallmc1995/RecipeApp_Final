import { Component, OnInit } from '@angular/core';
import { IRecipe } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;
  // listFilter: string = 'cart';
  _listFilter: string;
  get listFilter(): string{
      return this._listFilter;
  }
  
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredRecipes = this.listFilter ? this.performFilter(this.listFilter):this.recipes;
  }
  filteredRecipes: IRecipe [];
  recipes: IRecipe[]= [
    {
      "recipeName": "Burger",
      "recipeIngredients": "Bun",
      "recipePrice": 20.00,
      "starRating": 3.2,
      "imageUrl": "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg"
  },
  {
      "recipeName": "Pizza",
      "recipeIngredients": "Dough",
      "recipePrice": 30.00,
      "starRating": 4.2,
      "imageUrl": "https://vignette.wikia.nocookie.net/slenderfortressnonofficial/images/f/f4/Pizza.png/revision/latest?cb=20160402023758"
  },
  {
      "recipeName": "Salad",
      "recipeIngredients": "Lettuce, Tomato",
      "recipePrice": 40,
      "starRating": 4.8,
      "imageUrl": "https://i.pinimg.com/736x/89/fa/0d/89fa0d169e06d956dfed656f65bf2357--easy-beef-stroganoff-stroganoff-recipe.jpg"
  },
  {
      "recipeName": "Cake",
      "recipeIngredients": "Chocolate",
      "recipePrice": 50,
      "starRating": 3.7,
      "imageUrl": "http://www.primrose-bakery.co.uk/shop/content/images/thumbs/0000362_chocolate-layer-cake.jpeg"
  },
  {
      "recipeName": "Fish",
      "recipeIngredients": "Salmon",
      "recipePrice": 60,
      "starRating": 4.6,
      "imageUrl": "http://www.homerecipie.com/chickenstrips.jpg"
  }


  ]

  constructor() { 
    this.filteredRecipes = this.recipes;
  }

  performFilter(filterBy:string):IRecipe[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipe:IRecipe)=> recipe.recipeName.toLocaleLowerCase().indexOf(filterBy) != -1);
}

  toggleImage():void{
  this.showImage = !this.showImage;
}

ngOnInit() {
}

}
