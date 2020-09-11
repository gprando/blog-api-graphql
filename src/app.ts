import express, {Application} from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './graphql/schema';

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: process.env.NODE_ENV === 'development',
      }),
    );
  }
}

export default new App().express;