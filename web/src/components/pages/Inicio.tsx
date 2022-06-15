import { Footer } from "../Footer";
import { Login } from "../Login";
import { Carousel } from 'rsuite';


export function Inicio() {
    return (
        <>
            <div className="flex-1 grid h-screen w-screen bg-gradient-to-r from-slate-100 to-emerald-100 items-center">
                {/* <Carousel className="custom-slider">
                    <img src="https://leiturinha.com.br/blog/wp-content/uploads/2019/01/biblioteca.jpg" height="150"/>
                    <img src="https://static.appgeek.com.br/imagens/ler-livros-og.jpg" height="150" />
                    <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/495030-pessoas-lendo-na-grande-pilha-de-livro-com-ilustracao-em-plana-fundo-arvore-vetor.jpg" height="150"/>
                </Carousel> */}


                <div className="absolute self-center justify-self-end right-16">
                    <Login/>
                </div>

            </div>
            {/* <Footer/> */}
            
        </>
    )
}