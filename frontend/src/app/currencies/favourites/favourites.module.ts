import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FavouritesRoutingModule} from './favourites-routing.module';
import {FavouritesComponent} from './favourites.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    MatTabsModule,
    FlexModule
  ]
})
export class FavouritesModule {
}
