module.exports = (sequelize, DataType) => {

    const linea = sequelize.define('linea', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataType.STRING, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      codigo: {
        type: DataType.STRING, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      id_rubro: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },

    });
  



    linea.associate = (models) => {
     
    };
  
    return linea;
  
  };