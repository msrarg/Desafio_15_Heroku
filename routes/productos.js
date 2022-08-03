const { Router } = require('express');
// const { productosGetTest,productosGetTestView
const { productosGetTestView } = require('../controllers/productos');
const router = Router();

// router.get('/',productosGetTest);
router.get('/view',productosGetTestView)

module.exports = router;