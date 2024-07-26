import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'home-dynamic-body',
  templateUrl: './dynamic-body.component.html',
  styleUrl: './dynamic-body.component.css'
})
export class DynamicBodyComponent {
  
  @Output()
  public showDetail: EventEmitter<Boolean> = new EventEmitter();

  public activeDetail():void{
    this.showDetail.emit(true);
  }

  
  public deactiveDetail():void{
    this.showDetail.emit(false);
  }
}
