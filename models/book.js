
const { Sequelize, Model} = require('sequelize');
const sequelize = require('../db/db')


class Book extends Model {}

Book.init({
    bid : {
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
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'author'
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'img'
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'score'
    },
    info: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'info'
    },
    category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category'
    },
  },
  {
    sequelize: sequelize,
    // 数据库表名称
    tableName: 'book',
    // 不自动生成createdate\update时间字段值
    timestamps: false
  }
)

module.exports = Book