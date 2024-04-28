import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log('Api Home page')
    res.send('Api Home page')
})

export default router
