
module.exports.displayHomepage = (req, res) =>
{
    res.render("index", {title: "Home"});
};