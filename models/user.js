
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class User extends Model {}

User.init({
    uid : {
      type: Sequelize.STRING,
      field: 'uid',
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name'
    },
    avator: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'avator'
    },
    time: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'time',
      defaultValue: 0
    }
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'user',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = User