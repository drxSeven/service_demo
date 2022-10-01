import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCompComponent } from './m-comp.component';

describe('MCompComponent', () => {
  let component: MCompComponent;
  let fixture: ComponentFixture<MCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
