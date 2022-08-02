export default function Section({children}){
    if (!children[1]) {return <p>No information.</p>}
    return(

        <div>
            <h2>{children[0]}</h2>
            {children[1]}
        </div>

    )
}