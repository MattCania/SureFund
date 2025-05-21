import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class UserAccounts extends Model {
    static associate(model) {
      this.hasOne(model.UserProfiles, {foreignKey: 'accountId', onDelete: 'CASCADE'})
    }
  }

  UserAccounts.init(
    {
      accountId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize: sequelize,
      tableName: "user_accounts",
      timestamps: true,
    }
  );

  return UserAccounts;
}
