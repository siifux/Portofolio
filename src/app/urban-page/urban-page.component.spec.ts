import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanPageComponent } from './urban-page.component';

describe('UrbanPageComponent', () => {
  let component: UrbanPageComponent;
  let fixture: ComponentFixture<UrbanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
