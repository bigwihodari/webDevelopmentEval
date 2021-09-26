import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ItemModel } from './models/item.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  itemList(): Observable<Array<ItemModel>> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json());
  }

}
