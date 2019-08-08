import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People, Credits, Credit } from '@models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: People;
  credits: Credits;
  knownForCredits: Credit[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.people = this.route.snapshot.data.person;
    this.credits = this.route.snapshot.data.credits;
    this.knownForCredits = this.setKnownForCredits();
  }

  setKnownForCredits(): Credit[] {
    return this.people.knownDepartment === 'Acting'
      ? this.credits.cast
      : this.credits.crew;
  }
}
