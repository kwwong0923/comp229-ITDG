
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