import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getParticipants() {
    return [
      {name:'Arison Shibuke', gender:'male', age:17},
      {name:'Harden Scott', gender:'male', age:20},
      {name:'Tessa thompson', gender:'female', age:19},
      {name:'Malia Saunders', gender:'female', age:22},
      {name:'Walter Mcintosh', gender:'male', age:23},
      {name:'Charlie Acosta Jr', gender:'male', age:20},
      {name:'Johnny Ballard', gender:'male', age:24},
      {name:'Anna Stephens', gender:'female', age:23},
      {name:'Roxa Drake', gender:'female', age:18},
      {name:'Ariel Wood', gender:'male', age:16},
    ];
  }
}
