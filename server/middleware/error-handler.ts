import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err && err.name && err.name === 'ValidationError') {
        return res
            .status(409)
            .json({ message: err.message, kind: err.errors.email.kind, path: err.errors.email.path })
    }
    return res.status(500).json(err)
}
export default errorHandler