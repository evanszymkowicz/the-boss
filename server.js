const path = require('path');
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to the database
connectDB();

//middleware
app.use(express.json({ extended: false }));

//routes
app.use('/maybach/auth', require('./routes/maybach/auth'));
app.use('/maybach/users', require('./routes/maybach/users'));
app.use('/maybach/profile', require('./routes/maybach/profile'));
app.use('/maybach/posts', require('./routes/maybach/posts'));
app.use('/store', require('./routes/product'));

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('the server is on ' + PORT));
