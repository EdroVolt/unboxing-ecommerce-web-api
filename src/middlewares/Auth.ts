import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from './../models/User.model';
import { Admin } from 'models/Admin.model';
dotenv.config();

export class JwtChecking {
  checkJwt = (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt token from the head

    const token = <string>req.headers.authorization?.split(' ')[1];
    if (token) {
      jwt.verify(token, 'unboxing', (error, decoded) => {
        if (error) {
          return res.status(401).send(error.message);
        } else {
          return (res.locals.jwt = decoded);
          next();
        }
      });
    } else {
      res.status(401).send('unauthorized');
    }
  };

  signinJwt = (data: User | Admin, role: string) => {
    const timestamp = new Date().getTime();
    const exprirationTime = timestamp + 1 * 10000;
    const experiration = Math.floor(exprirationTime / 1000);

    try {
      return jwt.sign(
        {
          id: data._id,
          role: role,
          password: data.password
        },
        'unboxing',
        {
          algorithm: 'HS256',
          expiresIn: experiration
        }
      );
    } catch (error) {
      throw new Error('unAuthorized');
    }
  };

  // Try to validate the token and get data
  // try {
  //   jwtPayload = <any>jwt.verify(token, 'unboxing');
  //   res.locals.jwtPayload = jwtPayload;
  // } catch (error) {
  //   //If token is not valid, respond with 401 (unauthorized)
  //   res.status(200).send(req.headers['auth']);
  //   return;
  // }
  // //The token is valid for 1 hour
  // //We want to send a new token on every request
  // const { id, password } = jwtPayload;
  // const newToken = jwt.sign({ id, password }, 'unboxing', {
  //   expiresIn: '1h'
  // });
  // res.setHeader('token', newToken);
  // //Call the next middleware or controller
  // next();
}
