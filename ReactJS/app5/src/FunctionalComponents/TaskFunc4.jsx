

export function Parent4(){
    return (
        <div className="parentFunc"> 
            <h1>PARENT FUNCTION---4</h1>
        </div>
    )
}

export function Child4(){
    return (
        <div className="childFunc">
            <h1>CHILD FUNCTION---4</h1>
        </div>
    )
}

export default function Main4(){
    return (
        <div className="mainFunc">
            <h1>MAIN FUNCTION---4</h1>
            <Parent4/>
            <Child4/>
        </div>
    )
}