const Message = ({message, text, className}) => {
    return (
        <>
            {
                message ? <div className={className}>{text}</div> : null
            }
        </>
    )
}

export default  Message;
