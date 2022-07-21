import Universidad_origen from '../models/universidad_origen';
import { pick } from 'lodash';

export const getUniversidadOrigen = async (req, res) => {
  const uniorigenid = req.params.id;
  const equi = await Universidad_origen.findByPk(uniorigenid, {
    include: 'Materias_aprobadas',
  });
  if (equi) {
    res.json(equi.toJSON());
  } else {
    res
      .status(404)
      .json({ message: `Universidad de origen ${uniorigenid} no encontrada` });
  }
};

export const getUniversidadOrigenTodas = async (req, res) => {
  const equival = await Universidad_origen.findAll({
    include: 'Materias_aprobadas',
  });
  if (equival.length > 0) {
    res.json(equival.map((equival) => equival.toJSON()));
  } else {
    res.status(404).json({ message: `No hay materias aprobadas` });
  }
};

export const index = async (req, res) => {
  const universidad_origen = await Universidad_origen.findAll({});
  res.json({
    data: universidad_origen.map((universidad_origen) =>
      universidad_origen.toJSON()
    ),
  });
};

export const show = async (req, res) => {
  const universidad_origen = await Universidad_origen.findByPk(req.params.id);
  if (universidad_origen) {
    res.json({ data: universidad_origen.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró un Universidad con id ${req.params.id}`,
    });
  }
};

/////////POST/////////

export const createUniversidadOrigen = async (req, res) => {
  const createUniversidadOrigen = req.body;
  const datosMateriaSolicitada = pick(createUniversidadOrigen, [
    'id',
    'nombre',
    'localidad',
    'sigla',
  ]);

  const UniversidadOrigenCrear = { ...datosMateriaSolicitada };

  const dbResponse = await Universidad_origen.create(UniversidadOrigenCrear);

  res.json(dbResponse);
};

export const updateUniversidadOrigen = async (req, res) => {
  try {
    let id = req.params.id;
    let { codigo, nombre, localidad, sigla } = req.body;

    await Universidad_origen.update(
      { codigo, nombre, localidad, sigla },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send('Universidad actualizada');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron actulizar los datos');
  }
};

export const deleteUniversidadOrigen = async (req, res) => {
  try {
    let id = req.params.id;
    await Universidad_origen.destroy({
      where: {
        id,
      },
    });
    res.status(200).send('Universidad eliminada');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron borrar los datos');
  }
};
