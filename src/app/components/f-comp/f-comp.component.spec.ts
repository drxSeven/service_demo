import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCompComponent } from './f-comp.component';

describe('FCompComponent', () => {
  let component: FCompComponent;
  let fixture: ComponentFixture<FCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
