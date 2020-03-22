import {Component, OnInit} from '@angular/core';
import {CurrenciesService} from '../../services/currencies.service';
import {Currency} from '../../models/currency';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  currencies: Currency[];
  loading = true;

  constructor(private currencyService: CurrenciesService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(response => {
      this.currencies = response.currencies;
      this.loading = false;
    });
  }


}
