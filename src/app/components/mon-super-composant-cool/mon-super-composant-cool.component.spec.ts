import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonSuperComposantCoolComponent } from './mon-super-composant-cool.component';

describe('MonSuperComposantCoolComponent', () => {
  let component: MonSuperComposantCoolComponent;
  let fixture: ComponentFixture<MonSuperComposantCoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonSuperComposantCoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonSuperComposantCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
