import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import {map} from 'rxjs/operators';

import {Crisis} from './crisis';
import {CRISES} from './mock-crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    this.messageService.add('CrisesService: fetched crisis');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crise => crise.id === +id))
    );
  }

}
