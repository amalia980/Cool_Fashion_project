import React from "react";

const Checkbox = ({onClick, color, style, children}) => {
    const checkboxStyle = {
        ...style,
        backgroundColor: color,
        width: "16px",
        height: "16px",
        border: "1px solid black",
        borderRadius: "4px",
    }

    return (
        <div style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "baseline",}}>
            <div style={checkboxStyle} onClick={onClick} color={color} />
            <p style={{fontSize:"0.9rem",}}>{children}</p>
        </div>
    )
}
export default Checkbox;