function myFunction() {
  const url = '<webhook url>'

  const fromData = {
    content: `whatsapp released its API for free, it's time to integrate with it'`
  }

  const options = {
    'method': "post",
    'payload': fromData
  }

  const res = UrlFetchApp.fetch(url,options)

}
