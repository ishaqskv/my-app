import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TownService {
  cityName = 'kadapa';
  population = '12Lakhs';
  state = 'Andhra Pradesh';
  constructor() { }
}
