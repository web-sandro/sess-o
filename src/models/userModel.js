const pool = require('./db');

async function autenticar(email, senha) {
  const conn = await pool.getConnection();
  const [rows] = await conn.execute(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha]
  );
  conn.release();

  return rows.length > 0 ? rows[0] : null;
}

async function criarUsuario(email, senha) {
  const conn = await pool.getConnection();
  await conn.execute(
    'INSERT INTO usuarios (email, senha) VALUES (?, ?)',
    [email, senha]
  );
  conn.release();
}

module.exports = {
  autenticar,
  criarUsuario
};



// Simulação de banco de dados
// const usuarios = [
//   { id: 1, email: 'admin@teste.com', senha: '1234' },
//   { id: 2, email: 'user@teste.com', senha: 'abcd' }
// ];

// function autenticar(email, senha) {
//   return usuarios.find(user => user.email === email && user.senha === senha);
// }

// module.exports = { autenticar };
