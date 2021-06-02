import style from "../../add/Add.module.css";

const InputAdd = ({type, placeholder, value, func, validation}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className={style.input} value={value} onChange={func} onBlur={validation} />
        </div>
    )
}

export default  InputAdd;
