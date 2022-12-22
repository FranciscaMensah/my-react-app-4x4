import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App (){
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isComplete: false,
        employment: '',
        level: ''
    }); 
    
    function handleChange (event){
        const {name, value, type, checked} = event.target;
        setFormData((prevFormData)=>{
            return { 
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }
    })}

    console.log(formData)

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                <input
                    className='input'
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                <input
                    className='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                <textarea
                    className='input'
                    placeholder='Comments'
                    name='comments'
                    value={formData.comments}
                    onChange={handleChange}
                    />
                <br/>
                <input
                    className='checkbox'
                    type='checkbox'
                    name='isComplete'
                    checked={formData.isComplete}
                    onChange={handleChange}
                    />
                <label
                    htmlFor='isComplete'>
                   Completed Undergraduate Studies
                </label>
                <br/>
                <br/>
                <fieldset>
                    <legend>Current Employment Status</legend>
                    <input
                        type='radio'
                        id='unemployed'
                        name='employment'
                        value='unemployed'
                        checked={formData.employment === 'unemployed'}
                        onChange={handleChange}
                        />
                    <label htmlFor='unemployed'>Unemployed</label>
                    <br/>
                    <input
                        type='radio'
                        id='partTime'
                        name='employment'
                        value='part time'
                        checked={formData.employment === 'part time'}
                        onChange={handleChange}
                        />
                    <label htmlFor='partTime'>Part-time</label>
                    <br/>
                    <input
                        type='radio'
                        id='fullTime'
                        name='employment'
                        value='full time'
                        checked={formData.employment === 'full time'}
                        onChange={handleChange}
                        />
                    <label htmlFor='fullTime'>Full-time</label>
                </fieldset>
                <br/>
                <label htmlFor='level'>Choose your level</label>
                <br/>
                <select
                    id='level'
                    name='level'
                    value={formData.level}
                    onChange={handleChange}
                >
                    <option>-- Choose --</option>
                    <option value='100'>Level 100</option>
                    <option value='200'>Level 200</option>
                    <option value='300'>Level 300</option>
                    <option value='400'>Level 400</option>
                </select>
                <br/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
           
        </div>
    )
}

root.render(<App/>);


