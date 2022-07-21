import Usuario from '../models/usuario';
import { pick } from 'lodash';

export const getUsuario = async (req, res) => {
  console.log(getUsuario);
  const usuarioid = req.params.id;
  const product = await Usuario.findByPk(usuarioid, {
    include: 'Equivalencias',
  });
  if (product) {
    res.json(product.toJSON());
  } else {
    res.status(404).json({ message: `Usuario ${usuarioid} no encontrado` });
  }
};

export const index = async (req, res) => {
  const usuario = await Usuario.findAll({});
  res.json({ data: usuario.map((usuario) => usuario.toJSON()) });
};

export const getTodosLosUsuarios = async (req, res) => {
  const equival = await Usuario.findAll({ include: 'Equivalencias' });
  if (equival.length > 0) {
    res.json(equival.map((equival) => equival.toJSON()));
  } else {
    res.status(404).json({ message: `No hay equivalencias` });
  }
};

export const show = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (usuario) {
    res.json({ data: usuario.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró una materia aprobada con id ${req.params.id}`,
    });
  }
};

export const addUsuario = async (req, res) => {
  const createaddUsuario = req.body;
  const datosUsuario = pick(createaddUsuario, [
    'id',
    'dni',
    'nombre',
    'apellido',
    'email',
    'discord',
    'telefono',
    'rol',
    'password',
  ]);

  const UsuarioCrear = { ...datosUsuario };

  const dbResponse = await Usuario.create(UsuarioCrear);

  res.json(dbResponse);
};

export const updateUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    let {
      dni,
      nombre,
      apellido,
      email,
      discord,
      telefono,
      rol,
      password,
    } = req.body;

    await Usuario.update(
      { dni, nombre, apellido, email, discord, telefono, rol, password },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send('Usuario actualizado');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron actualizar los datos');
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    let id = req.params.id;
    await Usuario.destroy({
      where: {
        id,
      },
    });
    res.status(200).send('Usuario eliminado correctamente');
  } catch (error) {
    console.log(error);
    res.status(500).send('No se pudieron borrar los datos');
  }
};

export const getUsuarioCompleto = async (req, res) => {
  console.log(getUsuario);
  const usuarioid = req.params.id;
  const product = await Usuario.findByPk(usuarioid, {
    include: ['Equivalencias'],
  });
  if (product) {
    res.json(product.toJSON());
  } else {
    res.status(404).json({ message: `Usuario ${usuarioid} no encontrado` });
  }
};
