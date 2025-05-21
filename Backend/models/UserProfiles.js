import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class UserProfiles extends Model {
	static associate(model) {
      this.belongsTo(model.UserAccounts, {foreignKey: 'accountId', onDelete: 'CASCADE'})}
  }

  UserProfiles.init(
	{
	  profileId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	  },
	  accountId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	  },
	  firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  middleName: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: null
	  },
	  lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  gender: {
		type: DataTypes.ENUM("male", "female"),
		allowNull: false,
	  },
	  country: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  currency: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  city: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  address: {
		type: DataTypes.STRING,
		allowNull: false,
	  },
	  birthday: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	  },
	  age: {
		type: DataTypes.INTEGER,
		allowNull: true,
	  },
	},
	{
	  sequelize: sequelize,
	  tableName: "user_profiles",
	  timestamps: true,
	}
  );

  return UserProfiles;
}
