// Get our dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const util = require('util')

const pool = mysql.createPool({
  host: "terraform-20190313153613160000000001.ckipfp2in8ld.us-east-1.rds.amazonaws.com",
  user: "IGonzalez",
  password: "Crackpokemon94!",
  database: "IGonzalez_DB"
})
pool.query = util.promisify(pool.query)

// Implement the movies API endpoint
app.get('/movies', async function (req, res) {
  try {
    const rows = await pool.query(
      'select m.title, m.release_year, m.score, r.name as reviewer, p.name as publication from Movies m,' +
      'Reviewers r, Publications p where r.publication=p.name and m.reviewer=r.name'
    )
    res.json(rows)
  } catch (err) {
    console.error('API Error:', err)
    res.staus(500).send({'msg': 'Internal server error'})
  }
})

app.get('/mo', async function (req, res) {
  try {
    const rows = await pool.query(
      'select m.title, m.release_year, m.score, r.name as reviewer, p.name as publication from Movies m,' +
      'Reviewers r, Publications p where r.publication=p.name and m.reviewer=r.name'
    )
    res.json(rows)
  } catch (err) {
    console.error('API Error:', err)
    res.staus(500).send({'msg': 'Internal server error'})
  }
})

app.get('/reviewers', async function (req, res) {
  try {
    const rows = await pool.query('select r.name, r.publication, r.avatar from Reviewers r')
    res.json(rows)
  } catch (err) {
    console.error('API Error:', err)
    res.staus(500).send({'msg': 'Internal server error'})
  }
})

app.get('/publications', async function (req, res) {
  try {
    const rows = await pool.query('select r.name, r.publication, r.avatar from Reviewers r')
    res.json(rows)
  } catch (err) {
    console.error('API Error:', err)
    res.staus(500).send({'msg': 'Internal server error'})
  }
})

app.get('/pending', async function (req, res) {
  try {
    const rows = await pool.query(
      'select m.title, m.release_year, m.score, r.name as reviewer, p.name as publication' +
      'from RampUp.Movies m, RampUp.Reviewers r, RampUp.Publications p where' +
      'r.publication=p.name and m.reviewer=r.name and m.release>=2017'
    )
    res.json(rows)
  } catch (err) {
    console.error('API Error:', err)
    res.staus(500).send({'msg': 'Internal server error'})
  }
})

app.get('/', function (req, res) {
  res.status(200).send({'service_status': 'Up'})
})

console.log('server listening through port: ' + process.env.PORT)
app.listen(3000)
module.exports = app
