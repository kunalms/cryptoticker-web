import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllRoutingModule} from './all-routing.module';
import {AllComponent} from './all.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    AllRoutingModule,
    MatTabsModule,
    FlexModule,
    SharedModule
  ]
})
export class AllModule {
}
