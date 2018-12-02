export class App {
  constructor() {
  }
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Paul Sparkes AoC';

    // create loop for all the days

    config.map([
      { route: ['', 'home'],     name: 'home',      moduleId: PLATFORM.moduleName('days/main'), nav: 0, title: 'Home' },
      { route: 'day-01',         name: 'day-01',    moduleId: PLATFORM.moduleName('days/01/main'), nav: 1, title: 'Day 1' },
      { route: 'day-02',         name: 'day-02',    moduleId: PLATFORM.moduleName('days/02/main'), nav: 2, title: 'Day 2' }
    ]);
  }
}
