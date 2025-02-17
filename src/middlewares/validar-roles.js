export const tieneRole = (...roles) => {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                succes: false,
                msg: 'No hay usuario valido en la peticion'
            });
        }
        if(!roles.includes(req.usuario.role)){
            return res.status(401).json({
                succes: false,
                msg: `Usuario no autorizado, posee un role ${req.usuario.role}, los roles autorizados son ${roles}`
            });
        }
        next();
    }

    
}