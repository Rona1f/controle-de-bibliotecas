export function Login() {
    return (
        <div className="px-6 py-10 bg-white 0 rounded-lg shadow-2xl">
            <form action="" className="flex flex-col gap-4 text-2xl pb-4">
                <input type="text" name="email" placeholder="Email" className="px-2 py-2 rounded-[4px] border-2"/>
                <input type="text" name="senha" placeholder="Senha" className="px-2 py-2 rounded-[4px] border-2"/>
            
                    
                <button type="submit" className="bg-green-400 rounded text-white font-bold py-1">Entrar</button>
            </form>
            <button type="button" className="bg-blue-400 rounded text-white font-bold py-1 text-[1.2rem] w-full mb-4">Cadastre-se</button>
            <a href="/reset_senha" className="text-blue-500 underline underline-offset-2">Esqueci a senha</a>
        </div>
    )
}