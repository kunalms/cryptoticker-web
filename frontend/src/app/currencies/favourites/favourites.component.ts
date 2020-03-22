import {Component, OnInit} from '@angular/core';
import {Currency} from '../../models/currency';
import {CurrenciesService} from '../../services/currencies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  currencies: Currency[];
  loading = true;

  constructor(private currencyService: CurrenciesService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll(true).subscribe(response => {
      this.currencies = response.currencies;
      this.loading = false;
    });
  }
}
