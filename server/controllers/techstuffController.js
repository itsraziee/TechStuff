/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
  res.render("index", { title: "TechStuff" });
};

exports.smartphone = async (req, res) => {
  res.render("smartphone", { title: "TechStuff" });
};

exports.tablet = async (req, res) => {
  res.render("tablet", { title: "TechStuff" });
};

exports.laptop = async (req, res) => {
  res.render("laptop", { title: "TechStuff" });
};

exports.accessories = async (req, res) => {
  res.render("accessories", { title: "TechStuff" });
};

exports.viewAll = async (req, res) => {
  res.render("viewAll", { title: "TechStuff" });
};

exports.account = async (req, res) => {
  res.render("account", { title: "TechStuff" });
};

exports.REGISTRATION = async (req, res) => {
  res.render("REGISTRATION", { title: "TechStuff" });
};

exports.iPhone12 = async (req, res) => {
  res.render("iPhone12", { title: "TechStuff" });
};
