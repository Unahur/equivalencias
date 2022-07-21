import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        dni: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        discord: DataTypes.STRING,
        telefono: DataTypes.INTEGER,
        rol: DataTypes.STRING,
        password: DataTypes.STRING,

        // Este "campo" no se persiste, se calcula a partir de otro/s.
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );
  }
}
