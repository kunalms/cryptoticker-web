import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CurrenciesService} from '../../services/currencies.service';
import {Currency} from '../../models/currency';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CurrencyTableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  currencyList: Currency[];
  length: number;
  pageSize = 50;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  columnsToDisplay = ['rank', 'name', 'price', 'price_change_1', 'tags'];
  dataSource: MatTableDataSource<Currency>;
  expandedElement: Currency | null;

  @Input() isFavouriteScreen = false;

  constructor(private currencyService: CurrenciesService, private changeDetectorRefs: ChangeDetectorRef, private matSnackBar: MatSnackBar) {
  }

  @Input('currencies')
  set currencies(value: Currency[]) {
    if (value) {
      this.currencyList = value;
      this.length = this.currencyList.length;
      this.dataSource = new MatTableDataSource(this.currencyList);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
  }

  addToFavourite(id: number, index: number) {
    this.currencyService.addToFavourite(id).subscribe((result: any) => {
      this.currencyList[index].favorited = result.currency.favorited;
      this.currencyList[index].favoritesCount = result.currency.favoritesCount;
      this.matSnackBar.open('Successfully added ' + this.currencyList[index].name + ' to your watchlist.', 'Ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.changeDetectorRefs.detectChanges();
    });
  }

  removeFromFavourites(id: number, index: number) {
    this.currencyService.removeFromFavourites(id).subscribe((result: any) => {
      this.currencyList[index].favorited = result.currency.favorited;
      this.currencyList[index].favoritesCount = result.currency.favoritesCount;
      this.matSnackBar.open('Successfully removed ' + this.currencyList[index].name + ' from your watchlist.', 'Ok', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.changeDetectorRefs.detectChanges();
    });
  }
}
