import { User } from 'models/User.model';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserService } from './../services/User.service';
import { JwtChecking } from './../middlewares/Auth';
import { AdminService } from '../services/Admin.service';
import { Admin } from 'models/Admin.model';

const jwtChecking = new JwtChecking();

export class SigninController {
  _serviceObj = new UserService();
  _serviceAdminObj = new AdminService();

  getAuth = async (req: Request, res: Response, next: NextFunction) => {
    const email: string = req.body.email;
    try {
      const user: User | any = await this._serviceObj.findOneByEmail(email);
      if (!user) {
        const admin: Admin | any = await this._serviceAdminObj.findOneByEmail(email);
        if (!admin) throw Error('enter valid email or password');
        if (bcrypt.compareSync(req.body.password, admin.password)) {
          const token = jwtChecking.signinJwt(admin, 'admin');
          res.status(200).json({ admin, token });
        }
        res.status(401).send('unauthorized');
      }
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwtChecking.signinJwt(user, 'user');
        res.status(200).json({ user, token });
      }
      res.status(401).send('unauthorized');
    } catch (err) {
      next(err);
    }
  };
}
