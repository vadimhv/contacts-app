import style from "../../add/Add.module.css";

const InputAdd = ({type, placeholder, value, functions, validation}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className={style.input} value={value} onChange={functions} onBlur={validation} />
        </div>
    )
}

export default  InputAdd;
