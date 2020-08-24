import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiDataComponent } from './mani-data.component';

describe('ManiDataComponent', () => {
  let component: ManiDataComponent;
  let fixture: ComponentFixture<ManiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
