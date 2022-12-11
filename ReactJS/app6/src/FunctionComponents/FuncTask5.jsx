export function Parent5(){
    return(
        <div className="parentFunc">
            <h2>This is my PARENT FUNCTION---5</h2>
        </div>
    )
}

export function Child5(){
    return(
        <div className="childFunc">
            <h2>This is my CHILD FUNCTION---5</h2>
        </div>
    )
}

export default function Main5(){
    return(
        <div className="mainFunc">
            <h1>I am MAIN FUNCTION---5</h1>
            <Parent5/>
            <Child5/>
        </div>
    )
}