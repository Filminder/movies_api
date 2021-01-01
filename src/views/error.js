module.exports = function (ctx, errorCode, message) {
  ctx.status = errorCode
  ctx.body = {
    message: message,
    status: 'error'
  }
}
