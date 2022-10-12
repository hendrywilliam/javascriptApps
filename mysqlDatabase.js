//mysql -> npm install mysql
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db"
})

//lets assume that you've created database and its own table (users)
con.connect(err => {
    if(err) throw err;
    console.log('Connected to database');
    const sql = 'SELECT * FROM users';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});
