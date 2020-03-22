import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FavouritesRoutingModule} from './favourites-routing.module';
import {FavouritesComponent} from './favourites.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    MatTabsModule,
    FlexModule,
    SharedModule
  ]
})
export class FavouritesModule {
}
