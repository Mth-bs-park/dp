import { TestBed, inject } from '@angular/core/testing';

import { CardItemService } from './card-item.service';

describe('CardItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardItemService]
    });
  });

  it('should be created', inject([CardItemService], (service: CardItemService) => {
    expect(service).toBeTruthy();
  }));
});
