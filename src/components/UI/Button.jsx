import React from "react"

const Button = props => {
    console.log("BUTTON RAN");
    return (
        <button type={props.type} onClick={props.onClick}>{props.children}</button>
    )
}
export default React.memo(Button)