import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KCompComponent } from './k-comp.component';

describe('KCompComponent', () => {
  let component: KCompComponent;
  let fixture: ComponentFixture<KCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
