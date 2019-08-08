import { Injectable } from '@angular/core';
import { PeopleJson } from '@bridge-interfaces';
import { People } from '@models';

@Injectable({ providedIn: 'root' })
export class GetPeopleSerializer {
  from(json: PeopleJson): People {
    const people = new People();
    people.adult = json.adult;
    people.aka = json.also_known_as;
    people.biography = json.biography;
    people.birthday = json.birthday;
    people.deathday = json.deathday;
    // people.gender = json.gender.toString();
    people.homepage = json.homepage;
    people.id = json.id;
    people.profilePath = json.profile_path;
    people.imdbId = json.imdb_id;
    people.knownDepartment = json.known_for_department;
    people.name = json.name;
    people.placeOfBirth = json.place_of_birth;
    people.popularity = json.popularity;
    return people;
  }
}
