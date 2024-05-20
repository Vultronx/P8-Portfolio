const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const projectCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProject);
router.post('/', auth, multer, projectCtrl.createProject);
router.get('/:id', projectCtrl.getOneProject);
router.put('/:id', auth, multer, projectCtrl.modifyProject);
router.delete('/:id', auth, projectCtrl.deleteProject);

module.exports = router;