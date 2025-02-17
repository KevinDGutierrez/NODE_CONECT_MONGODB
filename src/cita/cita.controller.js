import User from '../users/user.model.js';
import Pet from '../pet/pet.model.js';
import Cita from './cita.model.js';

export const saveCita = async (req, res) =>{
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });
        const pet = await Pet.findOne({ name: data.name.toLowerCase() });
        

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Propietario no encontrado'
            })
        }
        if (!pet) {
            return res.status(404).json({
                success: false,
                message: 'Macota no encontrada'
            })
        }
        
        const cita = new Cita({
            ...data,
            user: user._id,
            pet: pet._id
        })
        
        await cita.save();

        res.status(200).json({
            success: true,
            message: 'Cita guardada correctamente',
            cita
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al guardar cita',
            error
        })
    }
}