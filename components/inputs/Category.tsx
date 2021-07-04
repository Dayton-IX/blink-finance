import { useState } from "react"

type Props = {
    category: Category
}

const Category = ({category}: Props) => {
    const [name, setName] = useState(category.name)
    return (
        <div className="flex flex-row w-11/12 mx-auto">
            <input className="" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        </div>
    )
};

export default Category;