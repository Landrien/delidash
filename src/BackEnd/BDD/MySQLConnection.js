import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'utilisateur'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion :', err);
    } else {
      console.log('Connecté à la base de données MySQL');
    }
  });

  connection.query('SELECT * FROM ma_table', (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
    } else {
      console.log('Résultats de la requête :', results);
    }
  });  

  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion :', err);
    } else {
      console.log('Connexion à la base de données MySQL fermée');
    }
  });