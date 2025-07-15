import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('pcea_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default sequelize;