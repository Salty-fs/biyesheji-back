
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class List extends Model {}

List.init({
    lid : {
        type: Sequelize.INTEGER,
        field: 'lid',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'uid'
    },
    bid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'bid'
    },
    list: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'list',
      defaultValue: 1
    },
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'list',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = List