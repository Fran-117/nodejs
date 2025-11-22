import { describe, it, expect, } from 'vitest';
import { Compra } from '../src/Compra/compra.ts';

const compra = new Compra();

const cantidad=15;
const precio=50;

describe( 'Pruebas de la clase Compra', () => {
    it('Precio unitario debe de ser 120',() => {
        expect(compra.precio(precio)).toBe(120);
    });

    it('Cantidad de productos debe ser 15',() => {
        expect(compra.cantidad(cantidad)).toBe(15);
    });

    it('Descuento debe ser del 0.1',() => {
        expect(compra.descuento(cantidad, precio)).toBe(0.1);  
    });
});