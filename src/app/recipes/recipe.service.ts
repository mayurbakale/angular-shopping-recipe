import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
//import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
//import { Store } from "@ngrx/store";

//import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    
    recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a Test Recipe',
        'http://knoxpa.com/wp-content/uploads/2017/12/recipes-header-image.jpg',
        [new Ingredient('Meat',1),new Ingredient('French Fries',1)]),

        new Recipe('A Test Recipe',
        'This is simply a Test Recipe 2',
        'http://knoxpa.com/wp-content/uploads/2017/12/recipes-header-image.jpg',
        [new Ingredient('Buns',1), new Ingredient('Meat',1)])
      ];

    constructor(//private shoppingListService : ShoppingListService, 
        /*private store: Store<{ shoppingList: 
        {ingredients: Ingredient[]}}>*/
    ) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }
    
    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    /*addIngredientsToShoppingList(ingredients: Ingredient[]) {
        //this.shoppingListService.addIngredientsToShoppingList(ingredients)
        this.store.dispatch(new ShoppingListActions.ADD_INGREDIENTS(ingredients));
    }*/

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
    }
}