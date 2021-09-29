import { ParticipantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  constructor(service: ParticipantsService) {
    this.player = this.participants = service.getParticipants();
  }
  player;
  participants;

  allAthlete() {
    this.player = this.participants;
  }
  genderAthlete(gender: string) {
    this.player = this.participants.filter(partcipant => partcipant.gender === gender)
  }

  ngOnInit(): void {
  }
}