import s from "./Error.module.scss";

const Error = () => {
    return (
        <div className={s.error}>
            <span className={s.error__message}>Page Error</span>
        </div>
    )
}

export default Error