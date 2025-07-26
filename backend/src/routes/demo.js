import {router } from 'express';
import { upload } from '../middleware/multer.js';




router.route('/demo').post(upload.fields(
    [
        { name: 'file', maxCount: 1 },
    ]
), addPurchaseDetails);