const createUsers = `
CREATE TABLE IF NOT EXISTS users (
  
  id INTERGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR,
  email VARCHAR,
  password VARCHAR, 
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

module.exports = createUsers;
