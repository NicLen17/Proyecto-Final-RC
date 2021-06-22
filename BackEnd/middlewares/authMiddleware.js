const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Leer token
    const token = req.header('x-auth-token');
    // Revisar Token
    if (!token) {
        console.log('🚀 ~ file: authMiddleware.js ~ line 8 ~ token', token);
        return res.status(401).json({ msg: 'No hay Token, permiso no valido' });
        if (window.confirm('No se puede ingresar a la siguiente direccion, desea volver a inicio?')) {
            history.push('/');
        }
    }
    // Validar Token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        console.log('🚀 ~ file: authMiddleware.js ~ line 14 ~ req.usuario', req.usuario);
        //Continuar al siguiente middleware
        return next();
    } catch (error) {
        res.status(401).json({ msg: 'Token no valido' });
    }
};
