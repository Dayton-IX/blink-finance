import { ReactChildren, useState } from "react";
import { Colors } from "../../constants/Colors";
import Navbar from "./Navbar";
import WithAuth from "../hoc/WithAuth"

type Props = {
    children: any
}

const Layout = ({children}: Props) => {
    const [dark, setDark] = useState(false)

    return (
        <WithAuth>
            <Navbar />
            <main className="w-full py-2 px-3">
                {children}
            </main>

            <style global jsx>{`
                :root {
					background-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                    transition: all 0.3s;
                    font-family: 'Fira Code', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    scrollbar-width: thin;
                    scrollbar-color: ${dark ? Colors.light.bgTertiary : Colors.dark.bgTertiary} ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
				}
				html {
					background-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                    transition: all 0.3s;
                    scrollbar-track-color: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
				}
                *::-webkit-scrollbar {
                    width: 12px;
                }
                *::-webkit-scrollbar-track {
                    background: ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                }
                *::-webkit-scrollbar-thumb {
                    background-color: ${dark ? Colors.light.bgTertiary : Colors.dark.bgTertiary};
                    border-radius: 20px;
                    border: 3px solid ${dark ? Colors.dark.bgMain : Colors.light.bgMain};
                }    
            `}</style>
        </WithAuth>
    )
};

export default Layout;