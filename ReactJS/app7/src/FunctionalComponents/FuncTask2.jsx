export function Parent2(){
    return(
        <div className="parentFunc">
            <h2>PARENT FUNCTION---2</h2>
        </div>
    )
}

export function Child2(){
    return(
        <div className="childFunc">
            <h2>CHILD FUNCTION---2</h2>
        </div>
    )
}

export default function Main2(){
    return(
        <div className="mainFunc">
            <h1>FUNCTION---2</h1>
            <Parent2/>
            <Child2/>
        </div>
    )
}