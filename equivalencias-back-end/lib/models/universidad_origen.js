import { Model, DataTypes } from 'sequelize';

export default class Universidad_origen extends Model {
  static init(sequelize) {
    return super.init(
      // columnas que va a tener la tabla
      {
        nombre_universidad: DataTypes.STRING,
        localidad: DataTypes.STRING,
        sigla: DataTypes.STRING,
      },
      // opciones
      {
        sequelize,
        // nombre de la tabla
        tableName: 'Universidad_origen',
        // esto no sé si sirve, si se seteó tableName
        modelName: 'Universidad_origen',
      }
    );
  }
}
