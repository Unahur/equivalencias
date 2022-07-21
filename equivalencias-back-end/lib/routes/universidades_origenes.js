import express from 'express';

import {
  getUniversidadOrigenTodas,
  getUniversidadOrigen,
  index,
  show,
  createUniversidadOrigen,
  updateUniversidadOrigen,
  deleteUniversidadOrigen,
} from '../controllers/universidad_origen_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/todas', withErrorHandling(getUniversidadOrigenTodas));
router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getUniversidadOrigen));
router.get('/:id', withErrorHandling(show));

router.post('/', withErrorHandling(createUniversidadOrigen));

router.put('/:id', withErrorHandling(updateUniversidadOrigen));

router.delete('/:id', withErrorHandling(deleteUniversidadOrigen));

export default router;
