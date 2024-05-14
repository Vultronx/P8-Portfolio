const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const contactCtrl = require('../controllers/contact');

router.get('/', contactCtrl.getAllContact); //auth
router.post('/', contactCtrl.createContact);
router.get('/:id', auth, contactCtrl.getOneContact);
router.put('/:id', auth, contactCtrl.replyContact); //A développer dans le futur
router.delete('/:id', auth, contactCtrl.deleteContact);

module.exports = router;