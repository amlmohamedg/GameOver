//import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AllComponent } from './all/all.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './auth.guard';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"all",canActivate:[AuthGuard],component:AllComponent},
  {path:"login",component:LoginComponent},
  {path:"platforms/:platform",canActivate:[AuthGuard], component:PlatformsComponent},
  {path:"sort-by/:sort_by",canActivate:[AuthGuard],component:SortByComponent},
  {path:"categories/:category",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"details/:id",canActivate:[AuthGuard],component:GameDetailsComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
