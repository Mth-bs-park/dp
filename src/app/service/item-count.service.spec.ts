import { TestBed, inject } from '@angular/core/testing';

import { ItemCountService } from './item-count.service';

describe('ItemCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemCountService]
    });
  });

  it('should be created', inject([ItemCountService], (service: ItemCountService) => {
    expect(service).toBeTruthy();
  }));
});
