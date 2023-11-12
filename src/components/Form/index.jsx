import { useState } from 'react';

import styles from './Form.module.css'
import InputMask from 'react-input-mask'

const Form = () => {
    let [peso, setPeso] = useState('');
    let [altura, setAltura] = useState('');

    const calculaImc = () => {
        let alturaAoQuadrado = altura * altura;
        if (alturaAoQuadrado <= 0) {
            return null;
        }

        const calculo = peso / alturaAoQuadrado;
        return calculo
    };

    const renderizaImc = () => {
        const imc = calculaImc();
        if (imc === null) {
            return null;
        }
        
        return (
            <>
                <h2>Seu IMC é:</h2>
                <p>{(imc).toFixed(2)}</p>
                <h3>Segundo a tabela de IMC, seu peso é considerado:</h3>
                {interpretarImc(imc)}
            </>
        );
    };

    const interpretarImc = (imc) => {
        switch (true) {
            case imc < 16.9:
                return (
                    <span>Muito abaixo do peso</span>
                );

            case imc >= 17 && imc < 18.5:
                return (
                    <span>Abaixo do peso</span>
                );

            case imc >= 18.5 && imc < 25:
                return (
                    <span>Peso Normal</span>
                );

            case imc >= 25 && imc < 30:
                return (
                    <span>Acima do peso</span>
                );

            case imc >= 30 && imc < 35:
                return (
                    <span>Obesidade grau 1</span>
                );

            case imc >= 35 && imc < 40:
                return (
                    <span>Obesidade grau 2</span>
                );

            case imc >= 40:
                return (
                    <span>Obesidade grau 3</span>
                );

            default:
                return null;
        }
    };
    
    return (
        <>
            <form>
                <input type="number"  onChange={(e) => setPeso(e.target.value)} placeholder='Seu Peso' />
                <input type="number" onChange={(e) => setAltura(e.target.value)} placeholder='Sua Altura' />
                {renderizaImc()}
            </form>
        </>
    );
};

export default Form;