import express from 'express';
const { check } = require('express-validator');

import {
  index,
  show,
  getEquivalenciasSolicitadas,
  getEquivalenciaAprobadaID,
  getEquivalenciaMatAprobadas,
  getEquivalenciaSolicitadaID,
  getEquivalenciasGeneral,
  getEquivalenciasGeneralID,
  addEquivalencia,
  createEquivalencia,
  createEquivalenciax3,
  updateEquivalencia,
  deleteEquivalencia,
  getEquivalenciasGeneralUsuario,
} from '../controllers/equivalencia_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/solicitada', withErrorHandling(getEquivalenciasSolicitadas));

router.get('/aprobada', withErrorHandling(getEquivalenciaMatAprobadas));

router.get('/solicitada/:id', withErrorHandling(getEquivalenciaSolicitadaID));
router.get('/aprobada/:id', withErrorHandling(getEquivalenciaAprobadaID));
router.get('/aprobada/:id', withErrorHandling(getEquivalenciaAprobadaID));
router.get('/general', withErrorHandling(getEquivalenciasGeneral));

router.get('/general/:id', withErrorHandling(getEquivalenciasGeneralID));

router.get(
  '/generalUsuario/:id',
  withErrorHandling(getEquivalenciasGeneralUsuario)
);

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));

router.post('/', withErrorHandling(addEquivalencia));

router.post('/createx2', withErrorHandling(createEquivalencia));

//router.post('/createx3', withErrorHandling(createEquivalenciax3));

router.post(
  '/createx3',
  [
    check('instituto', 'El campo instituto es obligatorio').not().isEmpty(),
    check('estado', 'El campo estado es obligatorio').not().isEmpty(),
    //check('observaciones', 'El campo observaciones es obligatorio').not().isEmpty(),
    check('UsuarioId', 'El campo UsuarioId es obligatorio').not().isEmpty(),

    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('carrera', 'El campo carrera es obligatorio').not().isEmpty(),

    check('array.*.nota', 'El campo nota es obligatorio').not().isEmpty(),
    check('array.*.carga_horaria', 'El campo carga_horaria es obligatorio')
      .not()
      .isEmpty(),
    check('array.*.año_aprobacion', 'El campo año_aprobacion es obligatorio')
      .not()
      .isEmpty(),
    check('array.*.nombre_materia', 'El campo nombre_materia es obligatorio')
      .not()
      .isEmpty(),
    check('array.*.certificado', 'El campo certificado es obligatorio')
      .not()
      .isEmpty(),
  ],
  withErrorHandling(createEquivalenciax3)
);

router.put('/:id', withErrorHandling(updateEquivalencia));

router.delete('/:id', withErrorHandling(deleteEquivalencia));

export default router;
