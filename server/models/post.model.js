import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    category: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    published: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export default Post;