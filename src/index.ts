import { Server } from './core/customServer';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { ErrorMiddleware } from './core/middleware/error.middleware';
import { BodyParserMiddleware } from './core/middleware/bodyParser.middleware';
import { MoragnMiddleware } from './core/middleware/morgan.middleware';

import { UserRouter } from './routers/User.router';
import { CategoryRouter } from './routers/Category.Router';

// -------------- server init ---------------
const app = new Server();
app.listen(8080);

// -------------- MWs -----------------------
app.middleware(new CorsMiddleware());
app.middleware(new BodyParserMiddleware());
app.middleware(new MoragnMiddleware());

// -------------- Routers -------------------
app.route(new UserRouter());
app.route(new CategoryRouter());

// -------------- Err MW --------------------
app.errorMiddleware(new ErrorMiddleware());
