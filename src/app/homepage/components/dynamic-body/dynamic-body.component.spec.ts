import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBodyComponent } from './dynamic-body.component';

describe('DynamicBodyComponent', () => {
  let component: DynamicBodyComponent;
  let fixture: ComponentFixture<DynamicBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
