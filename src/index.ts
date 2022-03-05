import { UserRouter } from './routers/User.router';
import { Server } from './core/customServer';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { ErrorMiddleware } from './core/middleware/error.middleware';

// -------------- server init ---------------
const app = new Server();
app.listen(8080);

// -------------- MWs -----------------------
app.middleware(new CorsMiddleware());

// -------------- Routers -------------------
app.route(new UserRouter());
// -------------- Err MW --------------------
app.errorMiddleware(new ErrorMiddleware());
