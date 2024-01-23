// create a schema using seqilizer for employ and manager relation
const Sequelize = require("sequelize");

const sequelize = new Sequelize("your_database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql", // Adjust as needed for your database
});

const Employee = sequelize.define("Employee", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  managerId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Employee",
      key: "id",
    },
    onDelete: "SET NULL", // Allow manager to be removed without deleting employees
  },
});

const Manager = Employee.define("Manager", {
  // Additional manager-specific fields, if any
});
// Establish one-to-many relationship (one manager can have many employees)
Manager.hasMany(Employee, {
  foreignKey: "managerId",
  as: "reports", // Define the association as 'reports'
});

Employee.belongsTo(Manager, {
  foreignKey: "managerId",
});

// Export models for use in your application
module.exports = { Employee, Manager };

// Create a new user
const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// Find all users
const users = await User.findAll();

Post.findAll({
  where: {
    authorId: 2,
    status: "active",
  },
});

(async () => {
  // Use subquery to find the top 3 highest salaries
  const topSalaries = await Employee.findAll({
    attributes: [[Sequelize.fn("max", Sequelize.col("salary")), "maxSalary"]],
    limit: 3,
    raw: true,
  });

  // Filter employees with salaries matching the top 3 found
  const employees = await Employee.findAll({
    where: {
      salary: {
        [Op.in]: topSalaries.map((row) => row.maxSalary),
      },
    },
    limit: 3,
  });

  console.log("First 3 employees with highest salaries:", employees);
})();

// ------------------**************************************************----------------- //

//  Same For the Mongoose Db
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "Employee", // References the Employee model itself
    required: false, // Not all employees may have a manager
  },
});

const managerSchema = new Schema(
  {
    // Additional manager-specific fields, if any
  },
  { discriminatorKey: "isManager" }
); // Enables polymorphism using "isManager" flag

// Define "Manager" as a subclass of "Employee"
employeeSchema.discriminator("Manager", managerSchema);

// Create and export models
const Employee1 = mongoose.model("Employee", employeeSchema);
const Manager1 = Employee.discriminator("Manager");

module.exports = { Employee, Manager };
