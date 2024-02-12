import Image from "next/image"
import Logo from '@/assets/dragonLogo.webp'
import Arrow from '@/assets/arrow-down.svg'
export function Header() {
    return (
        <header className="w-full">
            <div>
                <div>
                    <Image
                        src={Logo}
                        alt="dragon logo"
                    />
                    <ul>
                        <button>
                            <span>Para você</span>
                            <Image 
                            src={Arrow}
                            alt="Arrow dropdown"
                            />
                        </button>
                    </ul>
                </div>
            </div>
        </header>
    )
}