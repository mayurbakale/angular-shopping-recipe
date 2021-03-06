import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

      ingredientsChanged = new EventEmitter<Ingredient[]>();

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]) {
          /*for(let ingredient of ingredients) {
            this.addIngredients(ingredient)
          }*/

          this.ingredients.push(...ingredients)
          this.ingredientsChanged.emit(this.ingredients.slice())
      }
    
}