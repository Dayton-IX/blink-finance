import { AnimatePresence, motion } from "framer-motion"
import { Colors } from "../../constants/Colors"
import { Close } from "../../constants/svgLib"

type Props = {
    children: any
    open: boolean
    onClose: Function
}

const Modal = ({children, open, onClose}: Props) => (
    <AnimatePresence>
        {open && (
            <motion.div className="h-screen w-screen opacity-40 fixed bottom-0 left-0 z-30 bg-opacity-80 bg-dark-bgSecondary"
                key="dimScreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <motion.div className="rounded-t-sm bg-light-bgSecondary dark:bg-dark-bgSecondary absolute h-full w-screen bottom-0 z-50"
                    key="drawer" 
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    exit={{ y: 1000 }}
                    transition={{ y: { type: 'spring', stiffness: 500, damping: 50 } }}
                >
                    <button key="closeButton" onClick={() => onClose()} className="focus:outline-none p-3 absolute top-1 right-1">
                        <Close color={Colors.accentMain} width={26} height={26} />
                    </button>
                    <div className="w-11/12 mx-auto mt-3">
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
)

export default Modal