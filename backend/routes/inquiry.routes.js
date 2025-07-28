import { Router } from 'express';
import {submitInquiry} from '../controllers/inquiry.controllers.js';

const router = Router();

router.route("/submit").post(submitInquiry)

export default router;
