

export function Parent5(){
    return (
        <div className="parentFunc"> 
            <h1>PARENT FUNCTION---5</h1>
        </div>
    )
}

export function Child5(){
    return (
        <div className="childFunc">
            <h1>CHILD FUNCTION---5</h1>
        </div>
    )
}

export default function Main5(){
    return (
        <div className="mainFunc">
            <h1>MAIN FUNCTION---5</h1>
            <Parent5/>
            <Child5/>
        </div>
    )
}