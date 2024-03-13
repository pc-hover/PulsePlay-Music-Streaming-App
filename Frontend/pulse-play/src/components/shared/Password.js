const PasswordInput = ({ label, placeholder, value, setValue }) => {
    return (
        <div className="flex flex-col space y-2 w-full m-4">
            <label htmlFor={placeholder} className="bold">{label}</label>

            <input type="password" className="p-3 border border-gray-300 border-solid rounded-md" placeholder={placeholder} id={label} value={value} onChange={(e) => {
                setValue(e.target.value);
            }} />

        </div>
    );
}
export default PasswordInput;
