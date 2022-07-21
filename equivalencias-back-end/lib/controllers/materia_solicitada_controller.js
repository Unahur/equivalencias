import Materia_solicitada from '../models/materia_solicitada';
import { pick } from 'lodash';

export const index = async (req, res) => {
  const materia_solicitada = await Materia_solicitada.findAll({});
  res.json({
    data: materia_solicitada.map((materia_solicitada) =>
      materia_solicitada.toJSON()
    ),
  });
};

export const show = async (req, res) => {
  const materia_solicitada = await Materia_solicitada.findByPk(req.params.id);
  if (materia_solicitada) {
    res.json({ data: materia_solicitada.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró materia_solicitada con id ${req.params.id}`,
    });
  }
};

export const addMateriaSolictada2 = async (req, res) => {
  const datosMateria = req.body;

  const materiaSolicitada = Materia_solicitada.build(datosMateria);
  const dbSolicitada = await materiaSolicitada.save();

  res.json({ dbSolicitada });
};

export const addMateriaSolicitada = async (req, res) => {
  const createMateriaSolicitada = req.body;
  const datosMateriaSolicitada = pick(createMateriaSolicitada, [
    'id',
    'nombre',
    'carrera',
  ]);

  const MateriaSolicitadaParaCreate = { ...datosMateriaSolicitada };

  const dbResponse = await Materia_solicitada.create(
    MateriaSolicitadaParaCreate
  );

  res.json(dbResponse);
};

export const updateMateriaSolicitada = async (req, res) => {
  try {
    let id = req.params.id;
    let { nombre, carrera } = req.body;

    await Materia_solicitada.update(
      { nombre, carrera },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send('Materia actualizada');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron actualizar los datos');
  }
};

export const deleteMateriaSolicitada = async (req, res) => {
  try {
    let id = req.params.id;
    await Materia_solicitada.destroy({
      where: {
        id,
      },
    });
    res.status(200).send('Materia eliminada');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron borrar los datos');
  }
};
