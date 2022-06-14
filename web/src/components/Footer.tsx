import { GithubLogo, InstagramLogo, TelegramLogo } from "phosphor-react";

export function Footer() {

    return (

        <footer className="bg-amber-600 h-12 absolute bottom-0 w-full m-0">
            <div >
                <div className="h-12 flex items-center absolute right-4 gap-3">

                <a href="https://github.com/rona1f" className="">Ronaldo Rodrigues</a>
                <a href="https://github.com/rona1f" className=""><GithubLogo/></a>
                <a href="https://t.me/Ronaldoo_26" className=""><TelegramLogo/></a>
                
                </div>
            </div>
        </footer>
    )
}