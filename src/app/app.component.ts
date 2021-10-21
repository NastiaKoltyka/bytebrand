import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


import { Item } from './class/items';
import { PaginationService } from './core/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-task';
  page:number;
  constructor(public service:PaginationService) {
    this.page=1;
  }

  ngOnInit(): void {
    this.service.pagination(this.page)
    
  }
  chosePage(button:number){
    this.page=button;
    this.service.pagination(this.page);
  }


}

