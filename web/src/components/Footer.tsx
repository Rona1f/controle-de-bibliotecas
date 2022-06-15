import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from "phosphor-react";

export function Footer() {

    return (

        <footer className="bg-amber-600 h-[6rem] absolute bottom-0 w-full m-0">
            <div >
                <div className="h-full flex items-center absolute right-4 gap-3 text-xl">

                    <a href="https://github.com/rona1f" className="">Ronaldo Rodrigues</a>
                    <a href="https://github.com/rona1f" className=""><GithubLogo/></a>
                    <a href="https://www.linkedin.com/in/ronaldorodrigues26" className=""><LinkedinLogo/></a>
                    <a href="https://t.me/Ronaldoo_26" className=""><TelegramLogo/></a>
                    
                </div>
            </div>
        </footer>
    )
}