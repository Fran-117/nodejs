import { describe, it, expect, } from 'vitest';
import { Calculadora } from '../src/clase.ts';

const operaciones = new Calculadora();

describe('Pruebas de la calculadora', () => {
    it('Suma de 2 y 3 debe ser 5', () => {
    expect(operaciones.sumar(2, 3)).toBe(5);
    });
    it('Resta de 5 y 2 debe ser 3', () => {
    expect(operaciones.restar(5, 2)).toBe(3);
    });

    it('Multiplicación de 4 y 3 debe ser 12', () => {
    expect(operaciones.multiplicar(4, 3)).toBe(12);
    });

    it('División de 10 y 2 debe ser 5', () => {
    expect(operaciones.dividir(10, 2)).toBe(5);
    });
});
