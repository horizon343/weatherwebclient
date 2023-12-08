import { UseFormRegister, Path } from "react-hook-form"
import { ReactComponent as Search } from "./../../../resource/icon/search.svg"
import style from "./TextField.module.scss"
import { TTextFieldModel } from "../../../model/textField.model"

type TProps = {
    register: UseFormRegister<TTextFieldModel>
    name: Path<TTextFieldModel>
    placeholder: string
    onClick?: () => void
    isDisable?: boolean
}

export default function TextField({ placeholder, register, name, isDisable = false, onClick = () => {} }: TProps) {
    return (
        <div className={style.wrapper}>
            <input
                {...register(name)}
                className={style.textField}
                placeholder={placeholder}
                disabled={isDisable}
            />
            <Search
                className={style.icon}
                style={{ cursor: isDisable ? "default" : "pointer" }}
                onClick={() => !isDisable && onClick()}
            />
        </div>
    )
}
