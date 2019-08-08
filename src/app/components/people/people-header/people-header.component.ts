import { Component, OnInit, Input } from '@angular/core';
import { People } from '@models';

@Component({
  selector: 'app-people-header',
  templateUrl: './people-header.component.html',
  styleUrls: ['./people-header.component.scss']
})
export class PeopleHeaderComponent implements OnInit {
  @Input() people: People;
  constructor() {}

  ngOnInit() {}
}
