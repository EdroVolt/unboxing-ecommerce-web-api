import { Server } from './core/customServer';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { ErrorMiddleware } from './core/middleware/error.middleware';

// -------------- server init ---------------
const app = new Server();
app.listen(8080);

// -------------- MWs -----------------------
app.middleware(new CorsMiddleware());

// -------------- Routers -------------------

// -------------- Err MW --------------------
app.errorMiddleware(new ErrorMiddleware());
