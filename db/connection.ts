import { Sequelize } from "sequelize";

const db = new Sequelize('s17tsnode', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
});

export default db;