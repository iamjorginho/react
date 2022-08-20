import { getImagen } from "../../11-async-await"

describe('pruebas con async-await y Fetch', () => { 
    
    test('debe retornar el URL de la imagen', async() => { 
        
        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe('string');

     })

 })