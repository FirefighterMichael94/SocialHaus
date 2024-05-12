const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    
    if (res.headersSent) {
      return next(err);
    }
  
    res.status(500).json({ message: 'Internal Server Error' });
  };
  
  module.exports = errorMiddleware;
  