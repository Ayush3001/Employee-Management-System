const router = require('express').Router();
const Employee = require('../model/emp_schema');
const controller = require('../controller/controller');
router.post('/register', controller.registerUser);
router.post('/login', controller.login);

//to create an employee
router.route('/users').post(function (req, res) {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }
    // new user
    let employee = new Employee(
        req.body
    );
    //save user in datatbase
    console.log(employee)
    employee.save(function (err, news) {
        console.log("Tried to save...");
    })
        .then(data =>{
            res.status(200).send({ 'employee': 'Employee Added Successfully' });
        });
})

//request for displaying all employees
router.route('/users').get(function (req,res)
{
        Employee.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "error occured" })
            })
    
})



//to get employee old details by employee id
router.route('/users/:id').get(function (req, res) {
    console.log("in /users/:id get req");
    let id = req.params.id;
    console.log(id);
    Employee.findById(id, function (err, employee) {
        res.json(employee);
    });
});



 //To Update The Employee Details
router.route('/users/:id').post(function (req, res) {
    console.log("in /users/:id post req");

    Employee.findById(req.params.id, function (err, employee) {
        if (!employee)
            console.log("can't find employee.");
        
        else {
            employee.name = req.body.name;
            employee.gender = req.body.gender;
            employee.email = req.body.email;
            employee.phone = req.body.phone;
            employee.leave = req.body.leave;
            employee.ID = req.body.ID;
            employee.save().then(emp => {
                res.json('Employee Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Employee");
                });
        }
    });
});

//to delete an employee
router.route('/users/remove/:id').get(function (req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
    if (err) res.json(err);
    else res.json('Employee Deleted Successfully');
    });
    });
    module.exports = router;
