const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

const port = process.env.PORT || 7000;

app.use(function (req: any, res: any, next: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  //    next();
  //
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( '../../client/build'));
  app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
