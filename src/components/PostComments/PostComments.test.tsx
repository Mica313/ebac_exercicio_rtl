import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('deve renderizar dois comentarios', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('text-comentario'), {
            target:  {
                value: 'primeiro comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        fireEvent.change(screen.getByTestId('text-comentario'), {
            target:  {
                value: 'segundo comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('primeiro comentario')).toBeInTheDocument()
        expect(screen.getByText('segundo comentario')).toBeInTheDocument()
    })
});