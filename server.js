const app = require('./modules/app/app');
const port = process.env.PORT || 8000;
const cors = require('cors');
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`);
});


