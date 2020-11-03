const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send({'Title': "Dailly Planner"});
})

module.exports = router;