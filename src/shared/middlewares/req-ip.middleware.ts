import * as requestIp from 'request-ip'

function reqIp(req, res, next) {
  const clientIp: string = requestIp.getClientIp(req)
  req.clientIp = clientIp
  next()
}

export default reqIp
