import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { FormDetailComponent } from './components/form-detail/form-detail.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'form-detail', component:FormDetailComponent},
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
