import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Setting = sequelize.define('Setting', {
  key: { type: DataTypes.STRING, unique: true },
  value: DataTypes.TEXT,
});

export default Setting;
