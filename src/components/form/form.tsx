import React from "react";
import { useFormik } from "formik";

type Props = {};

export const Form = (props: Props) => {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            username: "",
            email: "",
            phone: "",
            ubication: "",
            experience: "good",
            feedback: "",
            checked: false,
         },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });

return (
    <div>
        <h1>Luigi's Restaurant - Customer Satisfaction Survey</h1>
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="username">Please introduce your name:</label> <br />
                <input type="text" id="username" name="username" onChange={handleChange} value={values.username} />
            </section>
            <section>
                <label htmlFor="email">Please introduce your e-mail</label> <br />
                <input type="email" id="email" name="email" onChange={handleChange} value={values.email} />
            </section>
            <section>
                <label htmlFor="phone">Introduce your phone number</label> <br />
                <input type="number" name="phone" id="phone" onChange={handleChange} value={values.phone} />
            </section>
            <section>
                Please select the ubication of the restaurant you went <br />
                <label htmlFor="merida">Merida</label>
                <input id="merida" type="radio" name="ubication" value="merida" onChange={handleChange} checked={values.ubication === "merida"} />
                <label htmlFor="progreso">Progreso</label>
                <input id="progreso" type="radio" name="ubication" value="progreso" onChange={handleChange} checked={values.ubication === "progreso"} />
            </section>
            <section>
                <label htmlFor="experience">Select the opction that describe better your experience</label>
                <select name="experience" id="experience" onChange={handleChange} value={values.experience}>
                    <option value="bad">Bad</option>
                    <option value="regular">Regular</option>
                    <option value="good">Good</option>
                </select>
            </section>
            <section>
                <label htmlFor="feedback">Any feedback, sugestions or comments?</label>
                <br />
                <textarea name="feedback" id="feedback" cols={30} rows={8} onChange={handleChange} value={values.feedback}>
                </textarea>
            </section>
            <p>
            <label htmlFor="checked">Would you like to do another survey in the future?</label>
            <input type="checkbox" name="checked" id="checked" onChange={handleChange} checked={values.checked}/>
            </p>
            <button type="submit">Submit</button>
        </form>
    </div> 
    ); 
}; 
