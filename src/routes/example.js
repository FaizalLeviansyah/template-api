'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/exampleController');
const { verifyToken } = require('../middlewares/authMiddleware');

// router.post('/', verifyToken, controller.createDocumentCode);
// router.get('/', verifyToken, controller.getAllDocumentCode);
// router.get('/:id', verifyToken, controller.getDocumentCodeById);
// router.put('/:id', verifyToken, controller.updateDocumentCode);
// router.delete('/:id', verifyToken, controller.deleteDocumentCode);
// router.delete('/bulk/:ids', verifyToken, controller.deleteBulkDocumentCode);

module.exports = router;