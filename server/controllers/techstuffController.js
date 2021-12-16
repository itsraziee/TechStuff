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

exports.iPadPro = async (req, res) => {
  res.render("iPadPro", { title: "TechStuff" });
};
exports.iPad8 = async (req, res) => {
  res.render("iPad8", { title: "TechStuff" });
};
exports.iPadAir = async (req, res) => {
  res.render("iPadAir", { title: "TechStuff" });
};
exports.iPadMini = async (req, res) => {
  res.render("iPadMini", { title: "TechStuff" });
};
exports.SamsungGalaxyTabS7 = async (req, res) => {
  res.render("SamsungGalaxyTabS7", { title: "TechStuff" });
};
exports.SamsungGalaxyTabS5e = async (req, res) => {
  res.render("SamsungGalaxyTabS5e", { title: "TechStuff" });
};
exports.HuaweiMatePad11 = async (req, res) => {
  res.render("HuaweiMatePad11", { title: "TechStuff" });
};
