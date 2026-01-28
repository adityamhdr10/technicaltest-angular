export const countries = [
  { name: 'Indonesia', code: 'ID' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Vietnam', code: 'VN' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Brunei', code: 'BN' },
  { name: 'United States', code: 'US' },
  { name: 'Japan', code: 'JP' },
  { name: 'South Korea', code: 'KR' },
  { name: 'China', code: 'CN' },
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Italy', code: 'IT' },
  { name: 'Spain', code: 'ES' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Brazil', code: 'BR' },
];

export const categoryFood = [
  { name: 'Traditional Food', icon: 'pi pi-home' },
  { name: 'Fast Food', icon: 'pi pi-bolt' },
  { name: 'Healthy Food', icon: 'pi pi-heart' },
  { name: 'Snacks', icon: 'pi pi-shopping-bag' },
  { name: 'Beverages', icon: 'pi pi-cup' },
  { name: 'Dessert', icon: 'pi pi-star' },
  { name: 'Seafood', icon: 'pi pi-fish' },
  { name: 'Vegetarian', icon: 'pi pi-leaf' },
  { name: 'Spicy Food', icon: 'pi pi-fire' },
  { name: 'Frozen Food', icon: 'pi pi-snowflake' },
  { name: 'Bread & Pastry', icon: 'pi pi-cake' },
  { name: 'Meat', icon: 'pi pi-drumstick' },
  { name: 'Pasta', icon: 'pi pi-spaghetti' },
  { name: 'Pizza', icon: 'pi pi-pizza' },
  { name: 'Salad', icon: 'pi pi-salad' },
  { name: 'Soup', icon: 'pi pi-bowl' },
  { name: 'Rice & Noodles', icon: 'pi pi-rice' },
  { name: 'Breakfast', icon: 'pi pi-breakfast' },
];

export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strYoutube: string;
  strInstructions: string;
  strSource: string;
  isDummy?: boolean;
  [key: string]: any; 
}
