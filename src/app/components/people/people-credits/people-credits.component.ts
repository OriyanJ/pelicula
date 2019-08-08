import { Component, Input, OnInit } from '@angular/core';
import { Credits, PeopleCast, PeopleCrew } from '@models';

class Group {
  name: string;
  data: [];
  constructor(name: string, data: []) {
    this.name = name;
    this.data = data;
  }
}

@Component({
  selector: 'app-people-credits',
  templateUrl: './people-credits.component.html',
  styleUrls: ['./people-credits.component.scss']
})
export class PeopleCreditsComponent implements OnInit {
  @Input() credits: Credits;
  allCredits: Array<PeopleCast | PeopleCrew>;
  maxCredits = 8;
  creditsFilter = '';

  cast: Array<PeopleCast>;
  groupedCrew: Group[] = [];

  constructor() {}

  ngOnInit() {
    this.groupedCrew = this.groupDepartments(this.credits);
    this.cast = this.credits.cast.slice().sort(this.sortCreditsByDate);
  }

  /**
   * Take crew array and seperate it to groups of departments.
   */
  groupDepartments(credits: Credits): Group[] {
    const group: Group[] = [];

    if (!credits.crew || !credits.crew.length) {
      return group;
    }

    credits.crew = credits.crew.sort(this.sortCreditsByDate);

    const groupObject = {};
    for (const crew of credits.crew) {
      if (!groupObject[crew.department]) {
        groupObject[crew.department] = [];
      }
      groupObject[crew.department].push(crew);
    }

    for (const index of Object.keys(groupObject)) {
      group.push(new Group(index, groupObject[index]));
    }

    return group;
  }

  /**
   * Filter an array of credits by a type.
   *
   * @param credits Array of credits
   * @param filter Filter type (either "movie" or "tv")
   */
  filterByType(
    credits: any[],
    filter?: string
  ): Array<PeopleCast | PeopleCrew> {
    filter = filter ? filter : this.creditsFilter ? this.creditsFilter : '';
    return credits || credits.length
      ? credits.filter(
          (credit: PeopleCast | PeopleCrew) => credit.mediaType === filter
        )
      : [];
  }

  /**
   * Handle a credit filter change by filtering the credits by type.
   */
  onCreditsFilterChange() {
    const filteredCredits = Object.assign({}, this.credits);
    filteredCredits.cast = this.filterByType(filteredCredits.cast).sort(
      this.sortCreditsByDate
    );
    filteredCredits.crew = this.filterByType(filteredCredits.crew).sort(
      this.sortCreditsByDate
    );
    this.cast = filteredCredits.cast;
    this.groupedCrew = this.groupDepartments(filteredCredits);
  }

  /**
   * Sort an array of credits by dates. Empty dates go first.
   */
  sortCreditsByDate(
    creditA: PeopleCast | PeopleCrew,
    creditB: PeopleCast | PeopleCrew
  ) {
    const dateA = new Date(creditA.releaseDate);
    const dateB = new Date(creditB.releaseDate);
    if (!creditA.releaseDate) {
      return -1;
    }
    if (!creditB.releaseDate) {
      return 0;
    }
    return (dateB as any) - (dateA as any);
  }
}
