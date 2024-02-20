import Image from "next/image"
import Logo from '@/assets/dragonLogo.webp'
import Arrow from '@/assets/arrow-down.svg'

export function Header() {
    return (
        <header className="w-full h-30 bg-snow-grey rounded-lg">
            <div>
                <div>
                    <Image
                        src={Logo}
                        alt="dragon logo"
                        width={80} 
                        height={80} 
                    />
                    <ul className="flex space-x-3">
                        <h1 className="px-1">Stormbound</h1>
                        <a href="">Sobre</a>
                        <a href="">Facções</a>
                        <a href="">Como jogar</a>
                        <a href="">Contato</a>
                        <button className="bg-primary-red text-snow-grey rounded-sm">
                            <span>Para você</span>
                        </button>
                        
                    </ul>
                </div>
            </div>
        </header>
    )
}