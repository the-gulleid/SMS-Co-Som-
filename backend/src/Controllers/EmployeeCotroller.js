const employeeService = require('../modules/employee.service');

// CREATE NEW EMPLOYEE
exports.createEmployee = async (req, res, next) => {
  try {
    const id = await employeeService.createEmployee(req.body);
    res.status(201).json({ id, message: 'Employee created' });
  } catch (err) {
    next(err);
  }
};

// GET ALL EMPLOYEE
exports.getEmployees = async (req, res, next) => {
  try {
    const data = await employeeService.getEmployees();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

// GET ONE EMPLOYEE
exports.getEmployee = async (req, res, next) => {
  try {
    const data = await employeeService.getEmployeeById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// UPDATE EMPLOYEE
exports.updateEmployee = async (req, res, next) => {
  try {
    await employeeService.updateEmployee(req.params.id, req.body);
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    next(err);
  }
};

// DELETE EMPLOYEE
exports.deleteEmployee = async (req, res, next) => {
  try {
    await employeeService.deleteEmployee(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};