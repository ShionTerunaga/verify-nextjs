"use client"

const Button = () => {
    const handleClick = () => {
        return 1 + 2
    }

    const handleTest = () => "a" + "b"

    return (
        <button
            onClick={function () {
                return 1 + 1
            }}
            style={{ backgroundColor: "white", color: "black" }}
        >
            Enter
        </button>
    )
}

export default Button
