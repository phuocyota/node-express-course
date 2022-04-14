// các bước làm controller
// b1: khai báo model ánh xạ dữ liệu
const user = require('../models/userModel')
// b2: sử dụng hàm tương ứng
const createUserWith = asyncWrapper(async(req, res) => {
    const result = await user.create(req.body)
    res.json({result})
})

const getAllUser = asyncWrapper(async(req, res) => {
    const result = await user.find({})
    res.json({result})
})

const getUserByUsername = asyncWrapper(async(req, res) => {
    const {username : text} = req.params
    const result = await user.findOne({username:text})
    res.json({result})
})

const getUserByPhone = asyncWrapper(async(req, res) => {
    const {phone : text} = req.params
    const result = await user.findOne({phone: text})
    res.json({result})
})

const getUserByEmail = asyncWrapper(async(req, res) => {
    const {email: text} = req.params
    const result = await user.findOne({email: text})
    res.json({result})
})

const updateUsername = asyncWrapper(async(req, res) => {
    const {username} = req.params
    const
    const result = await user.findOneAndUpdate({})
})

const deleteUser = asyncWrapper(async(req, res) => {

})