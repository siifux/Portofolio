import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitsComponentComponent } from './portraits-component.component';

describe('PortraitsComponentComponent', () => {
  let component: PortraitsComponentComponent;
  let fixture: ComponentFixture<PortraitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraitsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
