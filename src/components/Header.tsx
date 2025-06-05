import Button from "./Button"

const Header = () => {
  return (
    <div className="">
        <div className="bg-gray-600 max-w-7xl mx-auto p-4 rounded-b-2xl flex items-center justify-between">
            <div className="text-white font-bold text-2xl">Brainly</div>
            <div className="flex gap-4">
                <Button text={"Share"}/>
                <Button text={"Add Memory"}/>
            </div>
        </div>
    </div>
  )
}

export default Header