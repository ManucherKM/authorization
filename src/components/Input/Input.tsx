import s from "./Input.module.scss"

import { FC, ChangeEvent, useState } from "react"

export enum typeInput {
    text = "text",
    email = "email",
    password = "password"
}

interface IInput {
    value: string,
    setValue: (val: string) => void,
    type?: typeInput,
    required?: boolean
}

const Input: FC<IInput> = ({
    value,
    setValue,
    type = typeInput.text,
    required = false
}) => {

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    /*
        При ошибке = input__err;
        При успехе = input__success;
        По умолчанию = input__default;
    */

    const [style, setStyle] = useState(s.input__default);

    return (
        <>
            <input required={required} value={value} onChange={changeHandler} type={type} className={style} />
        </>
    )
}

export default Input