import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdetailComponent } from './pages/characterdetail/characterdetail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CuriositeComponent } from './pages/curiosite/curiosite.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "characters", component: CharactersComponent },
  { path: "curiosite", component: CuriositeComponent
 },
 {path: "characters/:characterID", component: CharacterdetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
