const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const multerSharp = require('../middleware/sharp-config');

const bookCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProject);
router.post('/', auth, multerSharp, projectCtrl.createProject);
router.get('/:id', projectCtrl.getOneProject);
router.put('/:id', auth, multer, projectCtrl.modifyProject);
router.delete('/:id', auth, projectCtrl.deleteproject);

module.exports = router;