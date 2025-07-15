import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Ministry = sequelize.define('Ministry', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    head: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
});

export default Ministry;