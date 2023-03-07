const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
                .getRepository(Skill)
                .save(req.body)
                res.send(req.body);
        } catch(err) {
                res.send("Error while creating Skill");
        };
    },
    read: async (req, res) => {
        try {
            const data = await dataSource
                .getRepository(Skill)
                .find()
                res.send(data);
        } catch(err) {
            res.send("Error while pulling Skill");
        };
    },
    update: async (req, res) => {
        try {
            await dataSource
                .getRepository(Skill)
                .update(req.body.id, {
                    "name": req.body.name
                })
                    res.send("Updated Skill");
        } catch(err) {
            res.status(404).send('Error updating Skill, page not found');
        };
    },
    delete: async (req, res) => {
        try {
            await dataSource
                .getRepository(Skill)
                .delete(req.body)
                    res.send("deleted Skill succesfully");
        } catch(err) {
                res.send ("error while deleting wilder");
        };
    }
};