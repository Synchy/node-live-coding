const express = require("express");
const dataSource = require("./utils").dataSource;
const WilderController = require ("./controller/wilder");
const SkillController = require("./controller/skills");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.get("/api/wilder", WilderController.read);
app.post("/api/wilder", WilderController.create);
app.delete("/api/wilder", WilderController.delete);
app.put("/api/wilder", WilderController.update);

app.get("/api/skill", SkillController.read);
app.post("/api/skill", SkillController.create);
app.delete("/api/skill", SkillController.delete);
app.put("/api/skill", SkillController.update);

app.get("/api/wilder/:idWilder/:idSkill", WilderController.read)
app.post("/api/wilder/:idWilder/:idSkill", WilderController.addLanguage);


const start = async () => {
    await dataSource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
}; 

start();

