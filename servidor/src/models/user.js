module.exports = (sequelize, DataType) => {

    const user = sequelize.define('user', {
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
      apellido: {
        type: DataType.STRING, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      imagen: {
        type: DataType.STRING, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      role: {
        type: DataType.STRING, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: { 
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });
  



    user.associate = (models) => {
     
    };
  
    return user;
  
  };