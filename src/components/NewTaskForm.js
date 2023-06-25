import React, { useState } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';


const INITIAL_FORM_DATA = {
    title: '',
    description: '',
};

const NewTaskForm = ({addTask}) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (event) => {
        console.log('handleChange is bein called');
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newTask = {
            ...formData, [fieldName]: fieldValue
        };
        console.log(newTask);
        setFormData(newTask);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(formData);
        setFormData(INITIAL_FORM_DATA);
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Task Title</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}/>
                <label htmlFor='description'>Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}/>
                <input type='submit' value='submit'/>
            </form>
        </section>
    );

};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;