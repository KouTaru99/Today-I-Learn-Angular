import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  selectedHero?: Hero;
  heroes?: Hero[] = []

  constructor (private heroSvc: HeroService, private messageSvc: MessageService) {

  }
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
   this.heroSvc.getHeroes().subscribe(data=>{
    this.heroes = data
   })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroSvc.addHero({ name } as Hero)
      .subscribe((hero) => {
        this.heroes?.push(hero);
      });
  }

}
