import userController from './user.controller';
import HTTP_METHODS from '../../constants/httpMethods';
import { STRICT_ROUTES } from '../../common/routes';
import ErrorHandler from "../../common/errorHandler";
import { RouterType } from "../../types/routerTypes";
import { verifyToken } from '../../common/authorization';

/**
 * Handle user related requests
 * @param req - http request class IncomingMessage
 * @param res - http response class ServerResponse
 */
const userRouter: RouterType = (req, res) => {
  const url = new URL(req.url || '', `http://${req.headers.host}`);

  const token = verifyToken(req);

  if (!token) {
    ErrorHandler.unauthorized(req, res, { message: 'Failed to authanticate token' });
    return;
  }

  switch (true) {
    case url.pathname.match(STRICT_ROUTES.USERS) && req.method === HTTP_METHODS.GET:
      userController.getAll(req, res);
      break;

    case url.pathname.match(STRICT_ROUTES.USERS_ID) && req.method === HTTP_METHODS.GET:
      userController.getOne(req, res);
      break;

    case url.pathname.match(STRICT_ROUTES.USERS) && req.method === HTTP_METHODS.POST:
      userController.createOne(req, res);
      break;

    case url.pathname.match(STRICT_ROUTES.USERS_ID) && req.method === HTTP_METHODS.PUT:
      userController.updateOne(req, res);
      break;

    case url.pathname.match(STRICT_ROUTES.USERS_ID) && req.method === HTTP_METHODS.DELETE:
      userController.deleteOne(req, res);
      break;

    default:
      ErrorHandler.notFound(req, res, { message: 'Route not found' });
      break;
  }
};

export default userRouter;
