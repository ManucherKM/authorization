import s from "./Button.module.scss"

import { FC } from "react"

export enum typeButton {
    button = "button",
    reset = "reset",
    submit = "submit"
}

interface IButton {
    text: string,
    onClick: () => void,
    type?: typeButton,
}

const Button: FC<IButton> = ({ text, onClick, type = typeButton.button }) => {

    function clickHandler() {
        onClick()
    }

    return (
        <>
            <button type={type} onClick={clickHandler} className={s.button__default}>
                {text}
            </button>
        </>
    )
}

export default Button