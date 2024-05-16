import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext'
import emailjs from '@emailjs/browser'
function Contact() {
    const context = useContext(myContext)
    const { mode} = context

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        cycleModel: '',
        desc:''
    });
    useEffect(()=>{
        
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await emailjs
                .sendForm('service_aeela6b', 'template_n6fv5y9',formData, {
                    publicKey: 'MFNUgQWdxYOgbBFjQ',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },(error) => {
                        console.log('FAILED...', error);
                    }
                );
        } catch (error) {
            console.error('Error occurred while submitting form data:', error);
        }
        console.log(formData);
    };

    return (
        <Layout>
            <div className="max-w-md mx-auto mt-8 mb-8 p-6 border rounded-lg shadow-lg" style={{ color: mode === 'dark' ? 'white' : '' }} >
                <h1 className="text-2xl font-bold mb-4 " >Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cycleModel" className="block font-semibold mb-1">Cycle Model</label>
                        <input type="text" id="cycleModel" name="cycleModel" value={formData.cycleModel} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="desc" className="block font-semibold mb-1">Description </label>
                        <input type="text" id="desc" name="desc" value={formData.desc} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contact;
