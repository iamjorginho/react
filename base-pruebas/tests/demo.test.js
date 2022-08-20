describe('PRUEBAS!!!!', () => {

    test('deben de ser iguales los strings', () => {

        const mensaje = "Hola Mundo";

        const mensaje2 = `Hola Mundo`;

        expect(mensaje).toBe(mensaje2);


    })

    test('deben ser iguales las edades', () => { 
        
        const edad = 18;
        const edad2 = 18;

        expect(edad).toBe(edad2);
     })

})



