import makeCardMakeController from '../controllers/make_controller.mjs'
import { Router } from 'express';
import verificar from '../middleware/middleware.mjs'

const route = Router()

route.get('/getMakes', verificar, makeCardMakeController.showMakes)
route.post('/postMakes', makeCardMakeController.addMake)
//route.delete('/deleteMakes', makeCardMakeController.addMake)

export default route