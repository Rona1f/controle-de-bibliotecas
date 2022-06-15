import { Footer } from "../Footer";
import { Login } from "../Login";
import { Carrossel } from "../Carrossel";
import { BookOpen, ChatCircleDots, Circle, CircleNotch, CirclesFour, DotsNine, FileCloud } from "phosphor-react";


export function Inicio() {
    return (
        <>
            <div className="flex-1 grid h-screen w-screen bg-gradient-to-r from-amber-200 to-orange-400 items-center">
                
                <div className="m-40">

                <span className="font-bold text-[5rem] text-transparent bg-clip-text bg-gradient-to-l from-blue-800 to-blue-700 text-clip flex max-w-4xl">Aproximando bibliotecas</span>
                <span className="flex items-center gap-2 text-xl">Empréstimos <Circle weight="fill"/> Consultas <Circle weight="fill"/> Renovação </span>
                </div>
                <div className="absolute self-center justify-self-end right-40">
                    <Login/>
                </div>

            </div>
            {/* <Footer/> */}
            
        </>
    )
}