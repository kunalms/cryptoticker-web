import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', redirectTo: 'all'},
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then(m => m.AllModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule {
}
