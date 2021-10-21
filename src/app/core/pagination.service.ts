import { Injectable } from '@angular/core';
import { Item } from '../class/items';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private itemsPerPage: number = 3
  items: Item[];
  pageNumbers: number[];
  pageItems:Item[];
  pageCount:number;
  constructor() {
    this.pageNumbers = [];
    this.pageItems=[]
    this.items = [
      {
        id: 1,
        name: 'sea',
        imageUrl: 'https://media.wired.com/photos/5bb6accf0abf932caf294b18/16:9/w_2400,h_1350,c_limit/waves-730260985.jpg'
      },
      {
        id: 2,
        name: 'forest',
        imageUrl: 'https://posta-magazine.ru/wp-content/uploads/2020/09/main_sounds-of-the-forest_posta-magazine.jpg'
      },
      {
        id: 3,
        name: 'snow',
        imageUrl: 'https://e3.365dm.com/19/12/1600x900/skynews-snow-weather_4866392.jpg?20191214173723'
      },
      {
        id: 4,
        name: 'rain',
        imageUrl: 'https://www.newmuslim.net/wp-content/uploads/2020/01/Rain.gif'
      },
      {
        id: 5,
        name: 'flowers',
        imageUrl: 'https://images.ctfassets.net/hrltx12pl8hq/5Iq664jCcrgs8BDsnpqoqg/8626987010e480955298017173d4c02d/01-flowers_797194879.jpg?fit=fill&w=480&h=270'
      },
      {
        id: 6,
        name: 'sky',
        imageUrl: 'https://www.publicdomainpictures.net/pictures/150000/velka/sunset-sky-1455125487HWs.jpg'
      },
      {
        id: 7,
        name: 'autumn',
        imageUrl: 'https://cdn.clickasnap.com/0x800/952465/7-automn-road.jpg'
      },
      {
        id: 8,
        name: 'sun',
        imageUrl: 'https://images.indianexpress.com/2020/11/pixabay_sun_1200.jpg'
      },
      {
        id: 9,
        name: 'mountains',
        imageUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg'
      },
      {
        id: 10,
        name: 'moon',
        imageUrl: 'https://lookw.ru/8/835/1476174326-moon-luna.-hd-wallpapers-37.jpg'
      }

    ]

    this.pageCount = Math.ceil(this.items.length / 3);
    for (let i = 0; i < this.pageCount; i++) {
      this.pageNumbers.push(i + 1);
    }
  };
  pagination(page:number){
    let start=(page-1)*this.itemsPerPage;
    this.pageItems=this.items.slice(start, start+this.itemsPerPage);
  }
}
