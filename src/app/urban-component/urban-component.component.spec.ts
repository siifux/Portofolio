import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanComponentComponent } from './urban-component.component';

describe('UrbanComponentComponent', () => {
  let component: UrbanComponentComponent;
  let fixture: ComponentFixture<UrbanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
