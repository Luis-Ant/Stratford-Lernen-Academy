module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoUsuario: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [["ADMINISTRADOR", "ALUMNO", "PROFESOR"]],
      },
    },
    idSede: {
      type: DataTypes.INTEGER,
      references: {
        model: "Sedes",
        key: "idSede",
      },
    },
    nombreUsuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apllPatUsuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apllMatUsuario: {
      type: DataTypes.STRING(50),
    },
    usuarioTag: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    imgUrlUsuario: {
      type: DataTypes.STRING(255),
    },
  });

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Curso, { foreignKey: "idProfesor" });
    //Usuario.hasMany(models.Inscripcion, { foreignKey: "idAlumno" });
    //Usuario.hasMany(models.Entrega, { foreignKey: "idAlumno" });
    Usuario.belongsTo(models.Sede, { foreignKey: "idSede" });
  };

  return Usuario;
};
