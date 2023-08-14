const express=require('express')
const { createFields, getDataById } = require('../controller/product')
const { isAuthenticationUser } = require('../middleware/auth')
const {createValidate}=require('../validation/product')
const router=express.Router()


router.route('/fields/:userId').post(isAuthenticationUser,createValidate, createFields)
router.route('/fields').get(isAuthenticationUser, getDataById)

module.exports=router