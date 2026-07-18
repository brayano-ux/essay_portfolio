import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avantfooter } from './avantfooter';

describe('Avantfooter', () => {
  let component: Avantfooter;
  let fixture: ComponentFixture<Avantfooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avantfooter],
    }).compileComponents();

    fixture = TestBed.createComponent(Avantfooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
