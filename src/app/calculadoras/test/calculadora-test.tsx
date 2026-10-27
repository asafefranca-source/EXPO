import { describe, expect, test } from '@jest/globals';
import {calcDelta} from '@/app/calculadoras/test/calculadoras';


describe('Bhaskara', () => {
  test('Delta negativo', () => {
    
      const a = 1;
      const b = 1;
      const c = 1;
    
      const resultado = calcDelta(a, b, c);

      expect(resultado).toBeLessThan(0);
    });
    test('Delta zerado', () => {
     
      const a = 1;
      const b = 2;
      const c = 1;
      
      const resultado = calcDelta(a, b, c);
  
    
      expect(resultado).toBe(0);
    });
});