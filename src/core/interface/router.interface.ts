import express from 'express';

export interface IRouterCustom {
  /**
   * this function configures router
   * @params no
   * @return router
   */
  getRouter(): express.IRouter;
}
