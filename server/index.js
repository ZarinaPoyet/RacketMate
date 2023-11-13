const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3070;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.use('/api/users', router);


// custom error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));