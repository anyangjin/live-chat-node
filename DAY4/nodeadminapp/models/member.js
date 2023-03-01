module.exports = function (sequelize, DataTypes) {
  //DataTypes => 대문자 시퀄라이즈가 들어있음
  return sequelize.define(
    //define() 디파인 메서드 사용
    "member",
    {
      member_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "회원고유번호",
      },
      email: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
        comment: "사용자메일주소",
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
