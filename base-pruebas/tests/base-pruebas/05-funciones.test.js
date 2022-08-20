import { getUser, getUsuarioActivo } from "../../05-funciones"

describe('prubeas en 05-funciones', () => {

    test('getUser debe retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)

    })


    test('getUsuarioActivo debe retornar un objeto', () => { 
        
        const nombre = "Jorge";
        const userNuevo = getUsuarioActivo(nombre);
    
        expect(userNuevo).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    
     })
  

})