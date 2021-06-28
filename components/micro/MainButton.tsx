import { Colors } from '../../constants/Colors';
import { Logo } from '../../constants/svgLib';

type Props = {
    className?: string,
    style?: object,
    colorA?: string,
    colorB?: string,
    children: React.ReactChild,
    onClick: Function,
    disabled?: boolean,
    loading?: boolean
}

const MainButton = ({ className, style, colorA="accentMain", colorB="accentSecondary", children, onClick, disabled=false, loading=false }: Props) => {
    return (
        <button disabled={disabled} onClick={() => onClick()} className={`${className} text-light-textMain text-lg p-3 bg-gradient-to-br from-${colorA} to-${colorB} my-2 flex flex-row items-center text-center justify-between rounded-lg transition-all focus:ring-2 focus:outline-none ring-${colorB} hover:ring-1 transition-all`} style={style}>
            {loading ? <Logo className="animate-spin mr-2" color={Colors.dark.textMain} /> : null}
            {children}
        </button>
    )
};

export default MainButton;