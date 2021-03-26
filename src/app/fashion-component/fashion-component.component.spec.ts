import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionComponentComponent } from './fashion-component.component';

describe('FashionComponentComponent', () => {
  let component: FashionComponentComponent;
  let fixture: ComponentFixture<FashionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
