

export function Parent1(){
    return(
        <div className="parentFunc">
            <h2>PARENT FUNCTION---1</h2>
        </div>
    )
}

export function Child1(){
    return(
        <div className="childFunc">
            <h2>CHILD FUNCTION---1</h2>
        </div>
    )
}

export default function Main1(){
    return(
        <div className="mainFunc">
            <h1>FUNCTION---1</h1>
            <Parent1/>
            <Child1/>
        </div>
    )
}

