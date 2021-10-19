const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Very basic api'}));

app.listen(8080, () => console.log('Server running'));