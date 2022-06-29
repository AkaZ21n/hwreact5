import React, {useState} from 'react';


function ContactsPages () {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        surname: "",

    })

    const changeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const submit = (e) => {
        e.preventDefault()
        setForm({
            name: "",
            lastName: "",
            surname: "",


        })
        alert("данные успешно отправлены");
        console.log(form)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={form.name}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="surname"
                    name="surname"
                    value={form.surname}
                    onChange={changeInput}
                />
                <button type="submit" >submit</button>

            </form>

        </div>
    );
}

export default ContactsPages;