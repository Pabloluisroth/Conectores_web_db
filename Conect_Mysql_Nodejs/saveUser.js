//invoke the DB connection
const conexion = require('/src/connect')

//procedure to save
/* 
exports.saveUser = (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const rol = req.body.rol

    conexion.query('INSERT INTO users SET ?', {email:email, name:name, rol:rol}, (error, results) => {
        if(error) {
            console.error(error)
            
        } else {
            res.redirect('/');
        }
    });
    
};
*/

exports.saveUser = (req, res) => {

    const email = req.body.email
    const name = req.body.name
    const rol = req.body.rol

    let consultas = `INSERT INTO users SET ?; INSERT INTO subscriber SET `; 

    conexion.query(consultas, [1, 2], {email:email, name:name, rol:rol},(error, results) => {
        if(error) {
            console.error(error)
            
        } else {
            res.redirect('/');
        } 
    });
};

