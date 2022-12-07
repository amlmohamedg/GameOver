import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './all/all.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { LoadingComponent } from './loading/loading.component';

 import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { CarouselModule } from 'ngx-owl-carousel-o';
import { SeemorePipe } from './seemore.pipe';
import { MoreGamesComponent } from './more-games/more-games.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AllComponent,
    RegisterComponent,
    LoginComponent,
    SortByComponent,
    PlatformsComponent,
    CategoriesComponent,
    ItemComponent,
    GameDetailsComponent,
    LoadingComponent,
    SeemorePipe,
    MoreGamesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
