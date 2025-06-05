import Button from "./Button"

const Header = () => {
  return (
    <div className="">
        <div className="bg-gray-600 max-w-6xl mx-auto px-4 py-2 rounded-b-2xl flex items-center justify-between">
            <div className="text-white font-bold text-2xl cursor-pointer">Brainly</div>
            <div className="flex gap-4">
                <Button text={"Share"}/>
                <Button text={"Add Memory"}/>
            </div>
        </div>
    </div>
  )
}

export default Header