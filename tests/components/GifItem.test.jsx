import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Prueba en GifItem', () => {

    const titulo = 'Titulo Prueba'
    const url = 'http://localhost/Url%20bien%20chingona'

    test('Debe hacer match con el Snapshot', () => {
        
        const { container } = render(<GifItem tittle={titulo} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        const { container } = render(<GifItem tittle={titulo} url={url} />);
        //screen.debug();
        //expect( screen.getByRole('img').src ).toBe( url );
        //expect( screen.getByRole('img').alt ).toBe( tittle );

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(titulo);

    })

    test('debe mostrar el titulo en el componente', () => {

        render(<GifItem tittle={titulo} url={url} />);
        expect( screen.getByText(titulo) ).toBeTruthy();
    })
})
