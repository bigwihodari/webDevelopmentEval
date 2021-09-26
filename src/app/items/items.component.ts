import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/item.service';
import { ItemModel } from 'app/models/item.model';

@Component({
  selector: 'pr-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  items: Array<ItemModel> = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.itemList().subscribe(items => this.items = items);
  }

}
