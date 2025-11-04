import { describe, it, expect } from 'vitest';
import { sum } from '../src';


describe('RESULTADO DE OPERACIONES', () => {
  it('Suma', () => {
    const result = sum(1, 3);
    expect(result).toEqual(4);
  });
});
