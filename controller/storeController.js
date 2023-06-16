const Stores = require("../model/userModel")

const allData = async(req,res) => {
    
    const allDatas = await Stores.find()

    if(!allDatas){
        res.status(401)
        res.send("No Data Found")
    }else{
        res.status(200)
        res.send(allDatas)
    }

}

const storeData = async (req, res) => {

    const { title, price, description, category, image, rating } = req.body

    if ( !title || !price || !description || !category || !image || !rating) {
        res.status(401)
        res.send("Pls fill all details.")
    }

    const storeInfo = await Stores.create({
        title, price, description, category, image, rating
    })

    if (!storeInfo) {
        res.status(401)
        res.send("Data Not Found...")
    } else {
        res.status(200).json(storeInfo)
    }

}

const deleteData = async (req,res) => {

    const deletedData = await Stores.findByIdAndDelete(req.params.id)

    if (deletedData ) {
        res.status(200).json("Deleted!")
    } else {
        res.status(401)
        res.send("Cannot Delete")
    }

}

const updateData = async (req,res) => {

    const updatedData = await Stores.findByIdAndUpdate(req.params.id , req.body)

    if (updatedData) {
        res.status(200)
        res.send(updatedData)
    } else {
        res.status(401)
        res.send("Cannot Delete")
    }

}

module.exports = { storeData , allData , deleteData ,updateData}