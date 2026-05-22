const logger = (req, res, next) => {
  const logEntry = {
    method: req.method,
    path: req.originalUrl,
    query: req.query,
    timestamp: new Date().toISOString()
  };
  console.log(JSON.stringify(logEntry, null, 2));
  next();
};

export default logger;