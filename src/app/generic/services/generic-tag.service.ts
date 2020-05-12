import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericTagService<T extends {tags: string[]}> {

  subject = new BehaviorSubject<T[]>(null);
  filteredSubjects = new BehaviorSubject<T[]>(null);
  
  filter(tags: string[]) {
    this.filteredSubjects.next(this.subject.value.filter(x => {
      let y = [];
      x.tags.forEach((tag: string) =>  y.push(tags.includes(tag)))
      return y.includes(true);
    }));
  }
  filterReset() {
    this.filteredSubjects.next(null);
  }

  add(array: T[]) {
    this.subject.next(array);
  }
}
