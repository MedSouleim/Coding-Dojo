import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
    const [category, setCategory] = useState('planets');
    const [id, setId] = useState(1);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    return (
        <div>
            <form>
                <label>
                    Choose category:
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="planets">Planets</option>
                        <option value="people">People</option>
                    </select>
                </label>
                <label>
                    Enter ID:
                    <input type="number" value={id} onChange={handleIdChange} />
                </label>
                <Link to={`/display/${category}/${id}`}>
                    <button>Fetch Data</button>
                </Link>
            </form>
        </div>
    );
}

export default Form;