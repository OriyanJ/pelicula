import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits, MediaCrew, Movie, Tv } from '@models';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  credits: Credits;
  departments: Object;
  media: Movie | Tv;
  type: string;
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.credits = this.route.snapshot.data.credits;
    this.media = this.route.snapshot.data.media;
    this.type = this.route.snapshot.data.type;
    this.id = this.route.snapshot.paramMap.get('id');
    this.departments = this.credits
      ? this.groupCrew(this.credits.crew as MediaCrew[])
      : {};

    console.log(this.route.snapshot.data);
  }

  /**
   * Create an array of departments out of a crew array.
   */
  groupCrew(crew: MediaCrew[]): Object {
    const grouped = {};

    for (const person of crew) {
      if (!grouped[person.department]) {
        grouped[person.department] = [];
      }
      grouped[person.department].push(person);
    }
    return grouped;
  }

  getDepartments() {
    return Object.keys(this.departments);
  }
}
