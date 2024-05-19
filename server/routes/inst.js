import express from 'express'
import {Inst} from '../models/Inst.js';
const router = express.Router();
import { verifyAdmin } from './auth.js';


router.post('/add', verifyAdmin, async (req, res) => {
    try {
        const {name, price, description, imageUrl} = req.body;
        const newinst = new Inst({
            name,
            price,
            description, 
            imageUrl

        })
        await newinst.save()
        return res.json({added: true})
        
    } catch (error) {

        return res.json({message: "Error in adding instrument"})
        
    }
})
router.get('/insts', async(req, res) => {
    try {
        const insts = await Inst.find()
        return res.json(insts)
        
    } catch (err) {
        return res.json(err)
        
    }

})

router.get('/inst/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const inst = await Inst.findById({_id: id})
        return res.json(inst)
        
    } catch (err) {
        return res.json(err)
        
    }

})

router.put('/inst/:id', async (req, res) => {
    
    try {
        const id = req.params.id;
        const inst = await Inst.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, inst})
        
    } catch (err) {
        return res.json(err)
        
    }

})


router.delete('/inst/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const inst = await Inst.findByIdAndDelete({_id: id})
        return res.json({deleted: true, inst})
        
    } catch (err) {
        return res.json(err)
        
    }

})

export {router as instRouter}