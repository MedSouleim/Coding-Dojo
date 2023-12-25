import { useState } from "react";
const Form = ({color,setColor }) => {
    const [body, setBody] = useState("");
    const [taille, setTaille] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newColor = {
            body,taille
        };
        setColor([...color, newColor]);
        setBody("");
        setTaille(0)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="color"
                placeholder="Color"
                onChange={(e) => {
                    setBody(e.target.value);
                }}
                value={body}
            ></input>
            <br />
            <input
                placeholder="width and heigth"
                onChange={(e) => {
                    setTaille(e.target.value);
                }}
                value={taille}
            ></input>
            <br />
            <button>Add Color</button>
        </form>
    );
};

export default Form;