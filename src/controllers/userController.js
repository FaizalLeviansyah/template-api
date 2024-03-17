const { db, sequelizeInstances } = require("../../config/sequelize");
const response = require("../tools/response");

exports.getAll = async (req, res) => {
    try {
        const users = await db.mydatabase.users.findAll();
        response(req, res, {
            status: 200,
            data: users,
        });
    } catch (error) {
        console.error(error);
        response(req, res, {
            status: error.name === 'SequelizeUniqueConstraintError' ? 409 : 500,
            data: error,
        });
    }
};

