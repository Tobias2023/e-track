const express = require('express');
const router = express.Router();

const Employee = require('../models/employees')

// list all employees

router.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Query one employee with ID

// Create a employee

router.post('/', async (req, res) => {
  const employee = new Employee({ 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    badgeNumber: req.body.badgeNumber,
    hireDate: req.body.hireDate,
    employeeCreatedDate: req.body.employeeCreatedDate
  })

  try {
    const newEmployee = await employee.save()
    res.status(201).send(newEmployee)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// Update an employee w/ ID

// Delete one employee with ID

module.exports = router;