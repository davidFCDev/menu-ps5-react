import React, { useState } from 'react';

const SoundToggler = ({ initialValue }) => {
    const [soundEnabled, setSoundEnabled] = useState(initialValue);

    const handleToggleSound = () => {
        setSoundEnabled(!soundEnabled);
        // Aquí puede agregar su lógica para activar o desactivar el sonido en su aplicación
    };

    return (
        <button onClick={handleToggleSound}>
            {soundEnabled ? 'Desactivar sonido' : 'Activar sonido'}
        </button>
    );
};

export default SoundToggler;