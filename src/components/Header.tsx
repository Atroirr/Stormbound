import Image from "next/image"
import Logo from '@/assets/tode_token.png'
import Arrow from '@/assets/arrow-down.svg'

export function Header() {
    return (
        <header className="w-full h-20 bg-blue-600">
           <div className="justify-between">
           
            <div className="flex justify-center items-center h-full gap-5 text-snow-grey">
                            
                    <Image 
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}>
                    </Image>

                    <button className="rounded">
                        <span>Stormbound</span>
                    </button>

                    <a href="#">Sobre</a>
                    <a href="#">Como Jogar</a>
                    <a href="#">Reinos</a>
                
            </div>
           </div>
        <br />
        </header>
    )
}

