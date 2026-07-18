import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Premiere } from './premiere';

describe('Premiere', () => {
  let component: Premiere;
  let fixture: ComponentFixture<Premiere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Premiere],
    }).compileComponents();

    fixture = TestBed.createComponent(Premiere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
