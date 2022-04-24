import { IMiddleware } from '../interface/middleware.interface';
import multer from 'multer';
import path from 'path';

export class ImageUploaderMiddleware implements IMiddleware {
  getMiddleware(): any {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../../uploads'));
      },
      filename: (req, file, cb) => {
        cb(
          null,
          // new Date().toLocaleDateString().replace(/\//g, '-') +
          //   '-' +
          file.originalname
        );
      }
    });

    const fileFilter = (req: any, file: any, cb: any) => {
      if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png'
      ) {
        cb(null, true);
      } else cb(null, false);
    };

    const uploader = multer({ storage, fileFilter });

    return uploader.single('file');
  }
}
