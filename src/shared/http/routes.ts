import { response, Router } from 'express'

const routes = Router();

routes.get('/', (request, res) => {
    return res.json({
        message: 'Funcionou ate aqui'
    })
})

export default routes;

