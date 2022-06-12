import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositeComponent } from './curiosite.component';

describe('CuriositeComponent', () => {
  let component: CuriositeComponent;
  let fixture: ComponentFixture<CuriositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuriositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
