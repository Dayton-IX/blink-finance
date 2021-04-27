const LineHeader = ({children}: any) => {
    return (
        <div>
            <h1 className="text-light-textMain dark:text-dark-textMain text-xl">{children}</h1>
			<hr className="border-b-2 border-light-textMain dark:text-dark-textMain -ml-5 mt-1 w-4/5"/>
        </div>
    )
};

export default LineHeader;