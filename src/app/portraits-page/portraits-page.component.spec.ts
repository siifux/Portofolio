import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitsPageComponent } from './portraits-page.component';

describe('PortraitsPageComponent', () => {
  let component: PortraitsPageComponent;
  let fixture: ComponentFixture<PortraitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraitsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
