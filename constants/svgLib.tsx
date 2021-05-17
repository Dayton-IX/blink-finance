type Props = {
    color: string,
    className?: string,
    width?: number,
    height?: number
}

export const Logo = ({color, className, width=24, height=24}: Props) => <svg className={className} width={width} height={height} viewBox="0 0 369 386" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M192.175 62L117 219.382L184.223 219.487L176.432 324.475L251.605 167.094L184.384 166.989L192.175 62Z" fill={color} stroke={color} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M51.6658 58.382L8.2368 7.80176" stroke={color} strokeWidth="15" strokeLinecap="round"/>
    <path d="M361.192 7.80176L317.764 58.382" stroke={color} strokeWidth="15" strokeLinecap="round"/>
    <path d="M51.4292 327L8 377.581" stroke={color} strokeWidth="15" strokeLinecap="round"/>
    <path d="M360.429 377.581L317 327" stroke={color} strokeWidth="15" strokeLinecap="round"/>
</svg>

export const UserPlaceholder = ({color, className, width=24, height=24}: Props) => <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const Edit = ({color, className, width=24, height=24}: Props) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

export const Close = ({color, className, width=24, height=24}: Props) => <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>