const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/wilder");
const Skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
                .getRepository(Wilder)
                .save(req.body)
                res.send(req.body);
        } catch(err) {
                res.send("Error while creating wilder");
        };
    },
    read: async (req, res) => {
        try {
            const data = await dataSource
                .getRepository(Wilder)
                .find()
                res.send(data);
        } catch(err) {
            res.send("Error while pulling wilders");
        };
    },
    update: async (req, res) => {
        try {
            await dataSource
                .getRepository(Wilder)
                .update(req.body.id, {
                    "name": req.body.name
                })
                    res.send("Updated Wilder");
        } catch(err) {
            res.status(404).send('Error updating wilders, page not found');
        };
    },
    delete: async (req, res) => {
        try {
            await dataSource
                .getRepository(Wilder)
                .delete(req.body)
                    res.send("deleted succesfully");
        } catch(err) {
                res.send ("error while deleting wilder");
        };
    },
    addLanguage: async (req, res) => {
        try {
            const addLanguagetoWilder = await dataSource
                .getRepository(Wilder)
                .findOneBy({ id: req.body.idWilder });
                console.log(addLanguagetoWilder);
            const skillToAdd = await dataSource
                    .getRepository(Skill)
                    .findOneBy({ id: req.body.idSkill });
                addLanguagetoWilder.skills = [...addLanguagetoWilder.skills, skillToAdd];
                await dataSource.getRepository(Wilder).save(addLanguagetoWilder);
                res.send("Added language to the wilder");
            console.log(skillToAdd);
        } catch (err) {
            console.log(err);
            res.status(404).send('Error adding langue - page not found');
        }
    }
};