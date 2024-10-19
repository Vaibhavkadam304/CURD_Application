const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
app.use(cors());

const port = 3000;

app.use(bodyParser.json());


app.use('/api/registration', registrationRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
