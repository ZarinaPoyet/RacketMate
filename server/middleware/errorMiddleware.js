const notFound = (req, res, next) => {
    ;
    res.ststus(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kond === 'ObjectId') {
        statusCode = 404;
        message = 'Not found'
    }

    res.status(statusCode).json({ message })
}

module.exports = { notFound, errorHandler }