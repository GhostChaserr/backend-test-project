import parser from 'ua-parser-js'

function reqUA(req, res, next) {
  const userAgent = parser(req.headers['user-agent'])
  const { os:
    { version, name: os },
    browser: { name: browser },
    device: { type: device, vendor, model },
  } = userAgent

  req.userAgent = {
    os,
    browser,
    device: device || 'PC',
    vendor,
    version,
    model,
  }
  next()
}

export default reqUA
