import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part4DirectivesComponent } from './part4-directives.component';

describe('Part4DirectivesComponent', () => {
  let component: Part4DirectivesComponent;
  let fixture: ComponentFixture<Part4DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part4DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part4DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
