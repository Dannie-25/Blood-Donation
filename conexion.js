var mysql = require('mysql');
var bcrypt = require('bcrypt');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'juan',
    database: 'blood_donation'
});


function conectarBaseDeDatos(){
    connection.connect((err) => {
        if(err) {
         console.error('Error connecting to database:',err);
            return;
        }
            console.log('Conexion establecida con la base de datos');
    });
}

function guardarUsuario(usuario){
    bcrypt.hash(usuario.password,10,(err,hash) => {
        if(err) {
            console.error('Error al incriptar la contraseña:',err);
            return;
        }
        usuario.password = hash;
        connection.query('INSERT INTO usuarios SET ?', usuario, (err, result) => {
            if(err) {
                console.error('Error al guardar el usuario:',err);
                return;
            }
            console.log('Usuario insertado');
        });
    });
}

module.exports = { conectarBaseDeDatos, guardarUsuario, connection };