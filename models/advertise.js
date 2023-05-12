
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class Advertise extends Model {}

Advertise.init({
    aid : {
        type: Sequelize.INTEGER,
        field: 'aid',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    bid : {
        type: Sequelize.INTEGER,
        field: 'bid',
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'img'
    },
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'advertise',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = Advertise