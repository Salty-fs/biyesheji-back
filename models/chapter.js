
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class Chapter extends Model {}

Chapter.init({
    zid : {
        type: Sequelize.INTEGER,
        field: 'bid',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    bid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'bid'
    },
    list: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'list'
    },
    info: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'info'
    },
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'chapter',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = Chapter