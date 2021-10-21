import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/core/pagination.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  page: number;
  constructor(public service: PaginationService) {
    this.page = 1;
  }
  ngOnInit(): void {
    this.service.pagination(this.page);
  }
  chosePage(button: number) {
    this.page = button;
    this.service.pagination(this.page);
  }
  previoslyPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.service.pagination(this.page);
    }
  }
  nextPage() {
    if (this.page < this.service.pageCount) {
      this.page += 1;
      this.service.pagination(this.page);
    }
  }
}
