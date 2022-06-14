const { Sequelize } = require('sequelize');
const database = require("../database/db")

const Jogo = database.sequelize.define(
    "jogo",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        titulo: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        imagem: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        genero: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        plataforma: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        preco: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        desenvolvedor: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        reqmin: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        reqideal: {
            type: Sequelize.STRING,
            allowNull: false,
        }

    },
    {
        freezeTableName: true,
        timestamps:false,
        createdAt: false,
        update: false,
    }

);

const initTable = async () => {
    await Jogo.sync();
};
initTable()

module.exports = Jogo;