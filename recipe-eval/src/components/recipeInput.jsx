import { useState} from "react";

export const Form = ({setShowBox})=>{

    const initFormData = {
        title:'',
        des:'',
        time:'',
        method:''
    }

    const [form,setForm] = useState(initFormData);

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setForm({...form,[name]:value})
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        fetch('http://localhost:3001/recipes',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'content-type':'application/json'
            }
        }).then(()=>setShowBox((pr)=>pr+1)).then(()=>setForm(initFormData));
    }
    return (
        <div className="form-con">
            <h3 className="logo">Add Recipe</h3>
        <form onSubmit={handleFormSubmit} className="form">
            <div>
                <div>
                    <label>Title: </label>
                    <input onChange={handleChange} type='text' name="title" value={form.title} />
                </div>
                <div>
                    <label>Description: </label>
                    <input onChange={handleChange} type='text' name="des" value={form.des} />
                </div>
                <div>
                    <label>Cooking Time: </label>
                    <input onChange={handleChange} type='text' name="time" value={form.time} />
                </div>
                <div>
                <label>Cooking Method: </label>
                <select name="method" onChange={handleChange} value={form.department} >
                    <option value="">Choose Method</option>
                    <option value="frying">Frying</option>
                    <option value="steaming">Steaming</option>
                    <option value="poaching">Poaching</option>
                    <option value="boiling">Boiling</option>
                </select>
                </div>
            </div>
            <input type="submit" />
        </form>
        </div>
    )
}