import { Component, OnInit, Input } from '@angular/core';
import { People } from '@models';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss']
})
export class PeopleInfoComponent implements OnInit {
  @Input() people: People;
  constructor() {}

  ngOnInit() {}
}
