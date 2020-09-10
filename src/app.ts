import express, {Application, Request, Response, NextFunction} from 'express';

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use('/', (request: Request, response: Response, next: NextFunction)=> {
      response.send({hellow: 'hellow wordl'});
    });
  }
}

export default new App().express;