module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
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
        allowNull: false,
        comment: "사용자메일주소",
      },
      member_password: {
        type: DataTypes.STRING(500),
        allowNull: false,
        comment: "사용자 난독화된 암호 문자열",
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "사용자 이름",
      },
      profile_img_path: {
        type: DataTypes.STRING(300),
        allowNull: false,
        comment: "프로필 사진 이미지 경로",
      },
      telephone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "사용자 전화번호",
      },
      entry_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "가입 유형 코드 0: 직접가입 1: SNS-Facebook 3: SNS-카카오톡",
      },
      use_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "계정 이용 상태 코드 0: 사용중지 1: 사용중 2: 탈퇴",
      },
      birth_date: {
        type: DataTypes.STRING(6),
        allowNull: true,
        comment: "사용자 생년월일 -EX)941019",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시-가입일시",
      },
      reg_member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "가입처리담당자 회원고유번호",
      },
      edit_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "회원정보 수정 일시 ",
      },
      edit_member_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "회원정보 수정 처리자 고유번호",
      },
    },
    {
      sequelize,
      tableName: "member",
      timestamps: false,
      comment: "회원정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "member_id" }],
        },
      ],
    }
  );
};
//     {
//       timestamps: false,
//       paranoid: true,
//     }
//   );
// };
