import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]) {
          /*for(let ingredient of ingredients) {
            this.addIngredients(ingredient)
          }*/

          this.ingredients.push(...ingredients)
          this.ingredientsChanged.next(this.ingredients.slice())
      }
    
}