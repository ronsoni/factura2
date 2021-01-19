module.exports = (sequelize, DataType) => {

    const producto = sequelize.define('producto', {
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
      id_linea: {
        type: DataType.INTEGER, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      id_marca: {
        type: DataType.INTEGER, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      estado: {
        type: DataType.INTEGER, 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      codigo_barra: {
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
      iva: {
        type: DataType.DECIMAL(10, 2), 
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      impuesto_interno: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
     
    });
  



    producto.associate = (models) => {
     
    };
  
    return producto;
  
  };