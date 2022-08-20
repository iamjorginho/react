import heroes from "../../../data/heroes";
import { getHeroeByIdAsync } from "../../09-promesas";

describe('Pruebas con promeras', () => { 

    test('getHeroeByIdAsync debe de retornar un Heroe async', (done) => { 

        const id = 1;

        getHeroeByIdAsync( id )
        .then(heroe =>{

            expect(heroe).toBe(heroes[0])
            console.log(heroes[0])
            done();

        })
        

     });

     test('debe tener un error sin el heroe por id no existe', (done) => { 

        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error =>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
        

      })


 })