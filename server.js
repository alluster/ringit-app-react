require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const SQL = require('sql-template-strings')
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser')
const path = require('path')
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'public/index.html'));
 });

app.use(bodyParser.json())
app.use(sslRedirect());
app.use(bodyParser.urlencoded({
  extended: true
}));
const pool = mysql.createPool({
	host: process.env.REACT_APP_DATABASE_HOST,
	user: process.env.REACT_APP_DATABASE_USERNAME,
	password: process.env.REACT_APP_DATABASE_PASSWORD,
	database: process.env.REACT_APP_DATABASE
});
 
app.get('/api/getrinkibyid/:id', (req, res) => {
	pool.getConnection(function(err, connection) {

		if (err) throw err; 
		query = SQL`SELECT * FROM ringit WHERE id=${req.params.id}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
})
app.get('/api/getcategories/', (req, res) => {
	pool.getConnection(function(err, connection) {

		if (err) throw err; 
		query = SQL`SELECT * FROM categories`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
})
app.get('/api/getringitincategory/:category', (req, res) => {
	pool.getConnection(function(err, connection) {

		if (err) throw err; 
		query = SQL`SELECT * FROM ringit WHERE category=${req.params.category}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});
})
app.get('/api/addrinki', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`INSERT INTO ringit (owner, created, name, location, image, description, category, price) VALUES (${req.query.owner}, ${req.query.created},${req.query.name},${req.query.location}, ${req.query.image}, ${req.query.description}, ${req.query.category}, ${req.query.price})`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)

			connection.release();
			if (error) throw error;
		});
	});

})
app.get('/api/addusertorinki', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`INSERT INTO shared_ringit (id_rinki, id_user, user_email) VALUES (${req.query.id_rinki}, ${req.query.id_user}, ${req.query.user_email})`
		connection.query(
			query,
			function (error, results, fields) {
			connection.release();
			if (error) throw error;
		});
	});

})
app.get('/api/getrinkiusers/:id', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`SELECT * FROM shared_ringit WHERE id_rinki=${req.params.id}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});

})

app.get('/api/getringitbyowner/:email', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`SELECT * FROM ringit WHERE owner=${req.params.email}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});

})
app.get('/api/getrinkibycode/:code', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`SELECT * FROM ringit WHERE id=${req.params.code}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});

})
app.get('/api/deleterinki/:id', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`DELETE FROM ringit WHERE id=${req.params.id}`
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});

})
app.get('/api/deleteuserfromrinki/:id', (req, res) => {
	pool.getConnection(function(err, connection) {
		if (err) throw err; 
		query = SQL`DELETE FROM shared_ringit WHERE id_rinki=${req.params.id_rinki} AND id_user=${req.params.id_user} `
		connection.query(
			query,
			function (error, results, fields) {
				res.send(results)
				connection.release();
				if (error) throw error;
			}
		);
	});

})

app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running..."));

