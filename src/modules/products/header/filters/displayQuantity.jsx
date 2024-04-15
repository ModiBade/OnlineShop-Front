const DisplayQuantity = () => {
    return (
        <ul className="flex items-center font-iran font-normal text-xs">
            <li className="cursor-pointer px-4 py-2 border-b-2 border-blue-500">جدیدترین</li>
            <li className="cursor-pointer px-4 py-2 border-b-2 border-transparent">ارزان ترین</li>
            <li className="cursor-pointer px-4 py-2 border-b-2 border-transparent">گران ترین</li>
            <li className="cursor-pointer px-4 py-2 border-b-2 border-transparent">پرفروش ترین</li>
        </ul>
    )
}

export default DisplayQuantity;