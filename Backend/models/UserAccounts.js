import { DataTypes, Model } from "sequelize";
import bcrypt from "bcryptjs";

export default function (sequelize) {
  class UserAccounts extends Model {
    static associate(model) {
      this.hasOne(model.UserProfiles, {
        foreignKey: "accountId",
        onDelete: "CASCADE",
      });
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
      hooks: {
        beforeCreate: async (account) => {
          if (account.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(account.password, salt);
            account.password = hashedPassword;
          }
        },
      },
    }
  );

  return UserAccounts;
}
