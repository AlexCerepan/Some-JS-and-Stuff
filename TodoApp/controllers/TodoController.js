let data = [];
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlEncodedParser, (req, res) => {
    data.push(req.body);
    console.log(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(
      (todo) => todo.item.replace(/ /g, "-") !== req.params.item
    );
    res.json(data);
  });
};
