import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent implements OnInit {

  disabled: boolean = true;
  searchControl: FormControl;

  constructor(private router: Router,
              private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe((value: string) => {
      this.searchChanged(value);
      this.changeDetection.markForCheck();
    })
  }

  searchChanged(value: string) {
    if (value) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  searchProduct(value: string) {
    this.router.navigate(
      ['/products'], 
      { queryParams: {search: value} }
    );
  }

}
