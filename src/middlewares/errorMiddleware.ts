import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  return res.status(500).json(error)
}
