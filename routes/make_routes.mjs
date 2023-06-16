import makeCardMakeController from '../controllers/make_controller.mjs'
import { Router } from 'express';

const route = Router()

//route.get('/getMakes', makeCardMakeController.addMake)
route.post('/postMakes', makeCardMakeController.addMake)
//route.delete('/deleteMakes', makeCardMakeController.addMake)

export default route