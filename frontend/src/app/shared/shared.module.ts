import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexModule} from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {CurrencyTableComponent} from './currency-table/currency-table.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [SpinnerComponent, CurrencyTableComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [SpinnerComponent, CurrencyTableComponent]
})
export class SharedModule {
}
