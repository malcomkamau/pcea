import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    published: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Event;