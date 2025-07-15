import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.TEXT,
});

export default Contact; 