import s from "./Login.module.scss"
import { useState } from "react";
import Input, { typeInput } from "../../components/Input/Input"
import Button, { typeButton } from "../../components/Button/Button";

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  function sendForm() {

    /*
        Запрос на бекенд
    */

    // Сбрасываем значения переменных
    // setEmail("");
    // setPassword("");
    // setName("");
    // setPhone("");
    // setAddress("");
  }

  return (
    <div className={s.wrapper__login}>
      <div className={s.login}>
        <h2 className={s.login__title}>
          Авторизация
        </h2>
        <form className={s.login__form} action="">

          <div className={s.wrapper__inputs}>
            <Input
              value={name}
              setValue={setName}
              type={typeInput.text}
            />
            <Input
              value={phone}
              setValue={setPhone}
              type={typeInput.text}
            />
            <Input
              value={address}
              setValue={setAddress}
              type={typeInput.text}
            />
            <Input
              value={email}
              setValue={setEmail}
              type={typeInput.email}
              required={true}
            />
            <Input
              value={password}
              setValue={setPassword}
              type={typeInput.password}
              required={true}
            />
          </div>

          <div className={s.wrapper__button}>
            <Button
              text="Отправить"
              onClick={sendForm}
              type={typeButton.submit}
            />
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login