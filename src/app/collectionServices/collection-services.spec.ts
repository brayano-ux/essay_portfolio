import { TestBed } from '@angular/core/testing';

import { CollectionServices } from './collection-services';

describe('CollectionServices', () => {
  let service: CollectionServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
