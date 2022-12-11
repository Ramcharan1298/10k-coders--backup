
export function Parent3(){
    return (
        <div className="parentFunc">
            <h1>PARENT FUNCTION---3</h1>
        </div>
    )
}

export function Child3(){
    return (
         <div className="childFunc">
            <h1>CHILD FUNCTION---3</h1>
         </div>
    )
}

export default function Main3(){
    return (
        <div className="mainFunc">
            <h1>MAIN FUNCTION---3</h1>
            <Parent3/>
            <Child3/>
        </div>
    )
}