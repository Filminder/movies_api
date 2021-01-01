module.exports = function (ctx, data) {
  ctx.status = 201
  ctx.body = {
    data: data,
    status: 'success'
  }
}
