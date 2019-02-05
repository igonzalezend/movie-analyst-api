const mysql = require('mysql')
const util = require('util')

async function main () {
  try {
    const pool = mysql.createPool({
      connectionLimit: 1000,
      host: process.env.DB_HOST || 'igonzalezdb.cm6hb8mfglop.us-east-1.rds.amazonaws.com',
      user: process.env.DB_USER || 'IGonzalez',
      password: process.env.DB_PASS || 'process.env.DB_PASS',
      database: process.env.DB_NAME || 'RampUp'
    })
    pool.query = util.promisify(pool.query)

    const publicationsQuery = 'INSERT INTO Publications (name, avatar) VALUES ?'
    const publicationsValues = [
      ['The Daily Reviewer', 'glyphicon-eye-open'],
      ['International Movie Critic', 'glyphicon-fire'],
      ['MoviesNow', 'glyphicon-time'],
      ['MyNextReview', 'glyphicon-record'],
      ['Movies n\' Games', 'glyphicon-heart-empty'],
      ['TheOne', 'glyphicon-globe'],
      ['ComicBookHero.com', 'glyphicon-flash']
    ]
    await pool.query(publicationsQuery, [publicationsValues])

    const reviewersQuery = 'INSERT INTO Reviewers (name, publication, avatar) VALUES ?'
    const reviewersValues = [
      ['Robert Smith', 'The Daily Reviewer', 'https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg'],
      ['Chris Harris', 'International Movie Critic', 'https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg'],
      ['Janet Garcia', 'MoviesNow', 'https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg'],
      ['Andrew West', 'MyNextReview', 'https://s3.amazonaws.com/uifaces/faces/twitter/d00maz/128.jpg'],
      ['Mindy Lee', 'Movies n\' Games', 'https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg'],
      ['Martin Thomas', 'TheOne', 'https://s3.amazonaws.com/uifaces/faces/twitter/karsh/128.jpg'],
      ['Anthony Miller', 'ComicBookHero.com', 'https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg']
    ]
    await pool.query(reviewersQuery, [reviewersValues])

    const moviesQuery = `INSERT INTO Movies (title, release, score, reviewer, publication) VALUES ?`
    const moviesValues = [
      [`Suicide Squad`, `2016`, 8, `Robert Smith`, `The Daily Reviewer`]
    ]
    await pool.query(moviesQuery, [moviesValues])

    console.log('Seeds succesfully executed')
    process.exit(0)
  } catch (err) {
    console.error('Seeds file error:', err)
    process.exit(1)
  }
}

main()
