

export function Parent4(){
    return(
        <div className="parentFunc">
            <h2>This is My PARENT FUNCTION---4</h2>
        </div>
    )
}

export function Child4(){
    return(
        <div className="childFunc">
            <h2>This is My CHILD FUNCTION---4</h2>
        </div>
    )
}

export default function Main4(){
    return(
        <div className="mainFunc">
            <h1>This is MAIN FUNCTION---4</h1>
            <Parent4/>
            <Child4/>
        </div>
    )
}

