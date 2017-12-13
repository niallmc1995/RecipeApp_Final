import { RecipequeryService } from './../services/recipequery.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
  
})
export class AdvancedSearchComponent implements OnInit {

  @Output() searchAdvanced: EventEmitter<Object> = new EventEmitter<Object>();
  private searchQuery: Object = {};
  
    constructor(public fb: FormBuilder, private router: Router) { }
  
    search(event) {
  
      event.preventDefault();

      this.searchAdvanced.emit(this.searchQuery);
    }

    
  ngOnInit() {
  }

}
