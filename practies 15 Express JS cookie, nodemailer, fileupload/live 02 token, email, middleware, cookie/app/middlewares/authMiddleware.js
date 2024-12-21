export default (req, res, next) => {
    let time = Date.now();
    console.log({time: time, from: "Middleware"})
    next();
}