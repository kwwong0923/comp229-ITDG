
module.exports.authCheck = (req, res, next) => 
{
    if (req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.redirect("/auth/login");
    }
}

module.exports.displayProfilePage = async(req, res) => 
{
    res.render("profile", {user: req.user})
    // add survey find later and return it to JSON -> to display list
};
