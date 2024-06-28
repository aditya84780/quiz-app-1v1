async function handleHomePage(req, res) {
    try {
        res.status(200).send("Home Page")
        return 
    } catch (error) {
        console.log("Home Page error: ", error);
    }
}

module.exports = {
    handleHomePage,
}