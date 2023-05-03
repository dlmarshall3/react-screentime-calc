import { Button } from "./Button"

export const AdvancedOptions = () => {
    return (
        <div>
            <div className="grid grid-cols-1">
                <div><span className="text-2xl font-bold">Monday: </span>0</div>
                <div><span className="text-2xl font-bold">Tuesday: </span>0</div>
                <div><span className="text-2xl font-bold">Wednesday: </span>0</div>
                <div><span className="text-2xl font-bold">Thursday: </span>0</div>
                <div><span className="text-2xl font-bold">Friday: </span>0</div>
                <div><span className="text-2xl font-bold">Saturday: </span>0</div>
                <div><span className="text-2xl font-bold">Sunday: </span>0</div>
            </div>
            <Button text="Calculate"></Button>
        </div>
    )
}