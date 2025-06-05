import Button from "./Button"

const Header = () => {
  return (
    <div className="">
        <div className="bg-gray-600 max-w-7xl mx-auto p-4 rounded-b-2xl flex justify-between">
            <div className="text-white font-bold text-2xl">Logo</div>
            <div className="flex gap-4">
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default Header