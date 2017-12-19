module.exports = {
  home: (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
      <head>
        <title>Lambda Deploy</title>
      </head>
      <body>
        Hello World
      </body>
    </html>`)
  }
};
