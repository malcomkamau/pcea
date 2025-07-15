import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Media = sequelize.define('Media', {
    title: DataTypes.STRING,
    type: DataTypes.STRING, // image, video, pdf
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
});

export default Media;