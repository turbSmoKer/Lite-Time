import sequelize from '../db.js';
import { DataTypes } from 'sequelize';
let models;

const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const userStorage = sequelize.define('userStorage', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    importance: { type: DataTypes.BOOLEAN },
    gap: { type: DataTypes.STRING },
    week: { type: DataTypes.STRING }
})

const task = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data: { type: DataTypes.STRING },
    importance: { type: DataTypes.STRING, },
    complete: { type: DataTypes.BOOLEAN },
})

const boxTasks = sequelize.define('boxTasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


user.hasOne(userStorage)
userStorage.belongsTo(user)

user.hasOne(boxTasks)
boxTasks.belongsTo(user)

boxTasks.hasMany(task)
task.belongsTo(boxTasks)

userStorage.hasMany(order)
order.belongsTo(userStorage)

models = { user, task, order, userStorage, boxTasks }
export default models