module.exports = (sequelize, DataType) => {

    const rubro = sequelize.define('rubro', {
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
  



    rubro.associate = (models) => {
     
    };
  
    return rubro;
  
  };