import heroes from "../../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../08-imp-exp";

describe('Pruebas en funciones de Heroes', () => { 

    test('debe de retornar un heroe por id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
         

     });

     test('debe de retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC'
        const heroe = getHeroesByOwner(owner);

        const heroeDataOwner = heroes.filter(he => he.owner === owner);

        console.log(heroeDataOwner)

        expect(heroe).toEqual(heroeDataOwner);

      })

      test('debe retornar un arreglo con los heroes de Marvel', () => { 

        const owner = 'Marvel'
        const heroe = getHeroesByOwner(owner);

        console.log(heroe)

        expect(heroe.length).toBe(2)
        


       })
    


 })