import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    'LiteTime',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
);

export default sequelize