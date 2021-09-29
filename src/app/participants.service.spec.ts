import { TestBed } from '@angular/core/testing';

import { ParticipantsService } from './participants.service';

describe('ParticipantsService', () => {
  let service: ParticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantsService);
  });

  it('well have in created', () => {
    expect(service).toBeTruthy();
  });
});
