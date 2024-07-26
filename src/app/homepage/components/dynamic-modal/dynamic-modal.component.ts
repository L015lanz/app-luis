import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'home-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrl: './dynamic-modal.component.css'
})
export class DynamicModalComponent {
      
  
  @Output()
  public onDeactivate:EventEmitter<boolean>=new EventEmitter();

  public deactivateDetail():void{
      this.onDeactivate.emit(false);
  }
}
