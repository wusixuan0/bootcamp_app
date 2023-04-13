const { Pool } = require('pg')
 
const pool = new Pool({
  database: 'test_project'
})

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));

pool.end()