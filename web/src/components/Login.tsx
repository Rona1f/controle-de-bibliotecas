export function Login() {
    return (
        <div className="px-6 py-10 bg-white 0 rounded-lg shadow-2xl ">
            <form action="" className="flex flex-col gap-4 text-2xl">
                <input type="text" name="email" placeholder="Email" className="px-2 py-2 rounded-[4px] border-2"/>
                <input type="text" name="email" placeholder="Senha" className="px-2 py-2 rounded-[4px] border-2"/>
            
                    
                <button type="submit" className="bg-green-400 rounded text-white font-bold py-1">Entrar</button>
                <button type="submit" className="bg-blue-400 rounded text-white font-bold py-1 text-[1.2rem]">Cadastre-se</button>
                
            </form>
        </div>
    )
}