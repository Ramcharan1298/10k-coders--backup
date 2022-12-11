

export function Parent3(){
    return(
        <div className="parentFunc">
            <h2>This is My PARENT FUNCTION---3</h2>
        </div>
    )
}

export function Child3(){
    return(
        <div className="childFunc">
            <h2>This is My CHILD FUNCTION---3</h2>
        </div>
    )
}

export default function Main3(){
    return(
        <div className="mainFunc">
            <h1>This is MAIN FUNCTION---3</h1>
            <Parent3/>
            <Child3/>
        </div>
    )
}

