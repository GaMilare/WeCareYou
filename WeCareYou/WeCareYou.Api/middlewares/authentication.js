const jwt = require('jsonwebtoken');
const variables = require('../bin/configurations/variables');

module.exports = async (req, res, next) => {

    let token = req.body.token || req.query.query || req.headers['x-access-token'];
    if (token) {
        try {
            
            let decoded = await jwt.verify(token, variables.Security.secretKey);
            req.usuarioLogado = decoded;
            next();
        } catch (error) {
            res.status(401).send({message: "O Token informado é invalido"});
            return;
        }
    } else {
        res.status(401).send({ message: "Você precisa informar um token para acessar esse recurso" });
        return;
    }
}
