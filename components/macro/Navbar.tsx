import { Colors } from "../../constants/Colors";
import { Logo, UserPlaceholder } from "../../constants/svgLib";
import { userSignOut } from "../../scripts/auth";
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()

    const onMenuOpen = async () => {
        await userSignOut()
        router.reload()
    }

    return (
        <nav>
            <div className="flex flex-row px-3 py-2 w-screen bg-light-bgMain dark:bg-dark-bgMain border-b-2 border-accentMain justify-between">
                <div className="flex flex-row items-center">
                    <Logo color={Colors.accentMain} className="mr-2" width={25} height={29} /> 
                    <h2 className="text-accentMain text-xl">Blink</h2>
                </div>
                <div className="bg-light-bgTertiary dark:from-dark-bgTertiary rounded-full p-1 flex flex-row items-center justify-center">
                    <button className="bg-none outline-none active:outline-none focus:outline-none" onClick={() => onMenuOpen()}>
                        <UserPlaceholder color={Colors.accentMain} />
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar