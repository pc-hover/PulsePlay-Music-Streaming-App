const ButtonComponent = ({ label, className, onlclickFunction }) => {
    return (
        <button
            className={`${className}`}
            onClick={onlclickFunction}
        >

            {label}
        </button>
    );
}
export default ButtonComponent;