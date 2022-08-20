import { getSaludo } from "../../02-template-string";

describe('Prueba de 02-template-string.js ', () => { 

    test('getSaludo debe de retornar Hola Jorge', () => { 
        
        const nombre = 'Jorge';

        const saludo = getSaludo(nombre)

        

        expect(saludo).toBe( saludo )
        

     })
     // get saludo debe de retornar hola carlos! 
     test('getSaludo debe retornar Hola Carlos si no hay argumento nombre', () => { 
        
         
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!')

      })

 })