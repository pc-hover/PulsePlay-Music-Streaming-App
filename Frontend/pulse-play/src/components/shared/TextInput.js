const TextInput = ({ label, placeholder, className, value, setValue }) => {
    return (
        <div
            className={`textInputdiv flex flex-col space-y-2  w-full my-3 ${className}`}>
            <label
                for={label}
                className="bfont-semibold">   {label}
            </label>

            <input
                type="text"
                className="p-3 border border-gray-300 border-solid rounded-md text-black"
                placeholder={placeholder}
                id={label}
                value={value}
                // On changing the value the setValue function will chnage the previous value of email to new value typed in e.target.value
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />

        </div>
    );
}
export default TextInput;

//  {`styles ${javascript}`}
//back tick