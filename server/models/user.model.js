import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: 'editor' },
});

export default User;
