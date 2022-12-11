

export function Parent2(){
    return(
        <div className="parentFunc">
            <h2>This is My PARENT FUNCTION---2</h2>
        </div>
    )
}

export function Child2(){
    return(
        <div className="childFunc">
            <h2>This is My CHILD FUNCTION---2</h2>
        </div>
    )
}

export default function Main2(){
    return(
        <div className="mainFunc">
            <h1>This is MAIN FUNCTION---2</h1>
            <Parent2/>
            <Child2/>
        </div>
    )
}

