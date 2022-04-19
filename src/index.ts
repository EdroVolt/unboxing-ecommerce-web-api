import { Server } from './core/customServer';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { ErrorMiddleware } from './core/middleware/error.middleware';
import { BodyParserMiddleware } from './core/middleware/bodyParser.middleware';
import { MoragnMiddleware } from './core/middleware/morgan.middleware';
import { ProductRouter } from './routers/Product.Router';
import { UserRouter } from './routers/User.router';
import { CategoryRouter } from './routers/Category.Router';
import { RegisterRouter } from './routers/Register.Router';
import { SigninRouter } from './routers/Login.Router';
import { AdminService } from './services/Admin.service';
import bcrypt from 'bcrypt';
import { RegisterController } from 'controllers/Register.controller';

// -------------- server init ---------------
const app = new Server();
const PORT = parseInt(process.env.PORT as string);
app.listen(PORT || 8080);

//
// const adminService = new AdminService();
// adminService.createOne({
//   name: 'firstAdmin',
//   email: 'adminEmail@unboxing.com',
//   password: bcrypt.hashSync('admin', 10),
//   role: 'admin'
// });
// -------------- MWs -----------------------
app.middleware(new CorsMiddleware());
app.middleware(new BodyParserMiddleware());
app.middleware(new MoragnMiddleware());

// -------------- Routers -------------------
app.route(new ProductRouter());
app.route(new CategoryRouter());
app.route(new UserRouter());
app.route(new RegisterRouter());
app.route(new SigninRouter());

// -------------- Err MW --------------------
app.errorMiddleware(new ErrorMiddleware());
