import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'home-dynamic-body',
  templateUrl: './dynamic-body.component.html',
  styleUrl: './dynamic-body.component.css'
})
export class DynamicBodyComponent {
  
  @Output()
  public onDetail: EventEmitter<number> = new EventEmitter();

  public activeDetail(id:number):void{
    this.onDetail.emit(id);
  }

}
