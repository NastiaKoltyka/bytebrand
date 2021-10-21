import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../class/items';
import { PaginationService } from '../../core/pagination.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  id: string | null;
  choosenItem: Item;
  constructor(private route: ActivatedRoute, private service:PaginationService) {
    this.id = '';
    this.choosenItem = new Item;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.choosenItem=this.service.items[Number(this.id)-1];
  }
}
