import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDOMComponent } from './shadow-dom.component';

describe('ShadowDOMComponent', () => {
  let component: ShadowDOMComponent;
  let fixture: ComponentFixture<ShadowDOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDOMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
