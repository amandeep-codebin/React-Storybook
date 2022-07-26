export interface InputFieldType {
    value: string,
    disabled ?: boolean,
    onChange: () => void,
    placeholder ?: string,
    label?: string,
    labelTextColor: string,
    type: 'text'| 'number' | 'email',
}

const InputField =({  
    value,
    placeholder = '',
    disabled,
    onChange = () => {},
    label,
    labelTextColor = 'black',
    type='text',
}:InputFieldType) => {

    return (
        <div>
            {/* <p>{label}</p> */}
            {label ? <p style={{color:labelTextColor}}>{label}</p> : null}
            <input value={value} placeholder={placeholder} type={type} disabled={disabled} onChange={() => {}}/>
        </div>
    )
}

export default InputField;