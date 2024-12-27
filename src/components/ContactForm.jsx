import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from 'react-icons/fi';
import {motion} from 'framer-motion'


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: '',
        mail: "",
        message: "",
    })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false)

    const dataHandler = (e) => {
        // console.log(formData);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        let errors = {}
        if (!formData.name) {
            errors.name = '* Name is Required';
        };
        if (!formData.phone) {
            errors.phone = '* Phone Number is Required'
        } else if (formData.phone.length < 10) {
            errors.name = `* Phone number must be at least 10 digits`
        }
        if (!formData.mail) {
            errors.mail = "* Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
            errors.mail = "Email is Invalid"
        }
        if (!formData.message) {
            errors.message = "* Message is Required"
        }
        return errors
    }


    const HandleSubmit = (e) => {
        e.preventDefault()

        // console.log('submitted');
        const validationErrors = validate()
        // console.log(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            console.log(validationErrors);
            console.log(errors);
        } else {
            setErrors({})
            setIsSending(true)

            emailjs.send(
                'service_lk92tsj',
                'template_rtgd3nw',
                formData,
                "jASPheLHQfIUxgF5iMVRk"
            ).then((Response) => {
                toast.success("Message send Successfully");
                console.log(Response);

                setFormData({
                    name: '',
                    phone: "",
                    mail: "",
                    message: "",
                })
            }).catch(error => {
                console.log(error);
                toast.error('Failed to Send Message. sorry try Again later.')
            }).finally(() => {
                setIsSending(false)
            })
        }
    }
    return (
        <section className='p-4 lg:w-3/4 ' id='contact'>
            <Toaster />
            <h2 className=' my-8 font-semibold text-center text-4xl tracking-tighter'>Let's Connect</h2>
            <motion.form initial={{opacity:0}} whileInView={{opacity:1} } transition={{duration:0.8, delay:0.7}} action="" className='' onSubmit={HandleSubmit}>
                <div className='mb-2 flex space-x-4 '>
                    <div className='lg:w-1/2'>
                        <input type="text" placeholder='Name' name='name' value={formData.name} onChange={dataHandler} className='mb-8 w-full appearance-none rounded-lg border border-stone-50  bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none ' />
                        {errors.name && (
                            <p className='text-sm text-rose-800'>{errors.name}</p>
                        )}


                    </div>
                    {/* </div> */}

                    {/* <div className='mb-4 flex space-x-4 '> */}
                    <div className='lg:w-1/2'>
                        <input type="number" placeholder='number' name='phone' id='phone' value={formData.phone} onChange={dataHandler} className='mb-8 w-full appearance-none rounded-lg border border-stone-50  bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none ' />
                        {errors.phone && (
                            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-sm text-rose-800'>{errors.phone}</motion.p>
                        )}

                    </div>
                </div>

                <div className='mb-2 flex space-x-4 mx-auto '>
                    <div className='w-full'>
                        <input type="mail" placeholder='mail' name='mail' value={formData.mail} onChange={dataHandler} className='mb-8 w-full appearance-none rounded-lg border border-stone-50  bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none ' />
                        {errors.mail && (
                            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-sm text-rose-800'>{errors.mail}</motion.p>
                        )}
                    </div>
                </div>

                <div className='mb-2 '>

                    <textarea type="text" id='message' placeholder='message' name='message' value={formData.message} onChange={dataHandler} rows='6' className='mb-8 w-full appearance-none rounded-lg border border-stone-50  bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none ' />
                    {errors.message && (
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-sm text-rose-800'>{errors.message}</motion.p>
                    )}

                </div>
                <button type='submit' className={`w-full p-3 rounded border border-stone-50/30  bg-stone-200 pv-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? 'curser-not-allowed opacity-50 ' : ""} `}
                    disabled={isSending}>
                    <div className="flex items-center justify-center gap-2 ">{isSending ? 'Sending' : "Send"}
                        <FiSend />
                    </div>
                </button>
            </motion.form>

        </section>
    )
}

export default ContactForm
