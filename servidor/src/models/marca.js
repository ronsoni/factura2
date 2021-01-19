module.exports = (sequelize, DataType) => {

    const marca = sequelize.define('marca', {
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
     

    });
  



    marca.associate = (models) => {
     
    };
  
    return marca;
  
  };