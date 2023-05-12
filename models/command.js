
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class Command extends Model {}

Command.init({
    cid : {
        type: Sequelize.INTEGER,
        field: 'cid',
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
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'score'
    },
    command: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'command'
    },
    time: {
        type: Sequelize.TIME,
        // allowNull: false,
        field: 'time'
    },
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'command',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = Command