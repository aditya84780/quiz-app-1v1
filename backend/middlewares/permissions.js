async function restrictToAdmin(req, res, next) {
    const userRole = req.userRole;
    console.log(userRole);
    if(userRole.admin == false) {
        res.status(404).send("The page you are looking for does not exist");
        return;
    }

    next();
}

module.exports = {
    restrictToAdmin,
}