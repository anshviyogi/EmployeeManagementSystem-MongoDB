const express = require('express')
const router = express.Router()
const Employee = require('../model/employee.model')

// Show Employee Add Page
router.get('/',(req,res)=>{
    res.render('addEmployee')
})

// Insert Employee data to MongoDB 
router.post('/',(req,res)=>{
    const emp = new Employee()
    emp.name = req.body.name
    emp.email = req.body.email
    emp.phone = req.body.phone
    emp.city = req.body.city

    emp.save((err,result)=>{
        if(err) console.log(err)
        else{
            res.render('insertedSuccess')
        }
    })
})

// Show all Employee's
router.get('/showEmployee',(req,res)=>{
    Employee.find((err,result)=>{
        if(err) console.log(err)
        else{
            res.render('showEmployee',{rows:result})
        }
    })
})

// Show update data page
router.get('/updateData',(req,res)=>{
    Employee.find((err,result)=>{
        if(err) console.log(err)
        else{
            res.render('updateList',{rows:result})
        }
    })
})

// Show Update Form on click of update Button
router.get('/updateForm/:id',(req,res)=>{
Employee.findById(req.params.id,(err,result)=>{
    if(err) console.log(err)
    else res.render('updateForm',{record:result})
})
})

// Update the data in MongoDB
router.post('/finalUpdate',(req,res)=>{
    Employee.findByIdAndUpdate({_id:req.body.id},req.body,{new:true},(err,result)=>{
        if(err) console.log(err)
        else{
            console.log(result)
            res.redirect('/employee/showEmployee')
        }
    })
})

// Show delete data page
router.get('/deleteData',(req,res)=>{
    Employee.find((err,result)=>{
        if(err) console.log(err)
        else{
            res.render('deleteList',{rows:result})
        }
    })
})

// Delete Employee from Database
router.get('/finalDelete/:id',(req,res)=>{
    Employee.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err) console.log(err)
        else res.redirect('/employee/showEmployee')
    })
})

module.exports = router