const allowedCorsUrl = [
    'https://localhost:8080',
    'http://localhost:8080',
    'https://localhost:8081',
    'http://localhost:8081',
  ];
  
  const ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  
  module.exports = (req, res, next) => {
    const { method } = req;
    const { origin } = req.head-ers;
    const reqHeaders = req.headers['access-control-request-headers'];
  
    res.header('Access-Control-Allow-Credentials', true);
  
    if (allowedCorsUrl.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
  
    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', reqHeaders);
      return res.end();
    }
    next();
  };