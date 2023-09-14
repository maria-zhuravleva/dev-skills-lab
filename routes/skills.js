import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:skillId', skillsCtrl.show)
router.get('/:skillId/edit', skillsCtrl.edit)
router.post('/', skillsCtrl.create)
router.put('/:skillId', skillsCtrl.update)
router.delete('/:skillId', skillsCtrl.delete)

export { router }
