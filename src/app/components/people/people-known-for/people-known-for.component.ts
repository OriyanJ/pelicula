import { Component, Input, OnInit } from '@angular/core';
import { PeopleCast, PeopleCrew } from '@models';

@Component({
  selector: 'app-people-known-for',
  templateUrl: './people-known-for.component.html',
  styleUrls: ['./people-known-for.component.scss']
})
export class PeopleKnownForComponent implements OnInit {
  @Input() credits: PeopleCast[] | PeopleCrew[];

  ngOnInit() {
    this.credits = this.sortCreditsByPopularity(this.credits);
    this.credits = this.mergeDuplicates(this.credits);
  }

  /**
   * Sort the credits by popularity
   */
  sortCreditsByPopularity(credits: PeopleCast[] | PeopleCrew[]) {
    return (credits as any[]).sort((creditA: any, creditB: any) => {
      return creditB.popularity - creditA.popularity;
    });
  }

  /**
   * Merge duplicated credits in the credits array.
   */
  mergeDuplicates(credits: PeopleCast[] | PeopleCrew[]) {
    const tempCredits = {};
    return (credits as []).filter((credit: PeopleCast | PeopleCrew) => {
      if (tempCredits[credit.title]) {
        return false;
      }
      tempCredits[credit.title] = credit;
      return true;
    });
  }
}
