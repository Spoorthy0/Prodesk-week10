export default function urlLogger(req, res, next) {
    const time = new Date().toLocaleTimeString();

  console.log(`[${req.method}] ${req.url} - ${time}`);
    next();
}