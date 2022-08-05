import Tema from './Tema'
import Usuario from './Usuario'

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema|null;
    data: string;
    usuario?: Usuario|null;
}

export default Postagem;