// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'home-dynamic-body',
//   templateUrl: './dynamic-body.component.html',
//   styleUrl: './dynamic-body.component.css'
// })
// export class DynamicBodyComponent {
  
//   @Output()
//   public onDetail: EventEmitter<number> = new EventEmitter();

//   public activeDetail(id:number):void{
//     this.onDetail.emit(id);
//   }

// }



import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'home-dynamic-body',
  templateUrl: './dynamic-body.component.html',
  styleUrl: './dynamic-body.component.css'
})
export class DynamicBodyComponent {
  displayedColumns: string[] = ['name', 'detail'];
  dataSource = ELEMENT_DATA;

  @Output()
    public onDetail: EventEmitter<number> = new EventEmitter();
  
    public activeDetail(id:number):void{
      this.onDetail.emit(id);
    }

}


export interface PeriodicElement {
  detail: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Pikachu', detail: 'Ver Detalle'  },
  {name: 'Pikachu', detail: 'Ver Detalle' },
  {name: 'Pikachu', detail: 'Ver Detalle'  },
  {name: 'Pikachu', detail: 'Ver Detalle'  },
  {name: 'Pikachu', detail: 'Ver Detalle'  },
  // {position: 6, name: 'Carbon'},
  // {position: 7, name: 'Nitrogen'},
  // {position: 8, name: 'Oxygen' },
  // {position: 9, name: 'Fluorine'},
  // {position: 10, name: 'Neon'},
];


