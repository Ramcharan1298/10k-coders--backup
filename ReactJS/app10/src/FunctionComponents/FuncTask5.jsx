

export function Parent5(){
    return(
        <div className="parentFunc">
            <h2>This is My PARENT FUNCTION---5</h2>
        </div>
    )
}

export function Child5(){
    return(
        <div className="childFunc">
            <h2>This is My CHILD FUNCTION---5</h2>
        </div>
    )
}

export default function Main5(){
    return(
        <div className="mainFunc">
            <h1>This is MAIN FUNCTION---5</h1>
            <Parent5/>
            <Child5/>
        </div>
    )
}

