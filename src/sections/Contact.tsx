import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

type Props = {}

export default function Contact({ }: Props) {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isValid = true;
        let newErrors = {
            name: '',
            email: '',
            message: ''
        };

        if(!formData.name) {
            newErrors.name = t('contactForm.validationErrors.nameRequired');
            isValid = false;
        }
        if(!formData.email) {
            newErrors.email = t('contactForm.validationErrors.emailRequired');
            isValid = false;
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contactForm.validationErrors.emailInvalid');
            isValid = false;
        }
        if(!formData.message) {
            newErrors.message = t('contactForm.validationErrors.messageRequired');
            isValid = false;
        }

        setErrors(newErrors);
        if(!isValid) {
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert(t('contactForm.successMessage'));
            setFormData({ name: '', email: '', message: '' }); // Reset form
        }).catch(() => {
            alert(t('contactForm.errorMessage'));
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    return (
        <section id='contact' className="bg-contactBg dark:bg-contactBgDarkMode py-10 px-15">
            <h2 className="text-3xl my-8 dark:text-white">{t('contactForm.title')}</h2>

            <form className="mt-4" onSubmit={handleSubmit}>

                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-1">
                        <input autoComplete='name' value={formData.name} onChange={handleChange} type="text" id="name" placeholder={t('contactForm.namePlaceholder')} className="dark:text-white width h-15 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg focus:outline-none" />
                        {errors.name && <p className="text-left my-3 text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="flex-1">    
                        <input autoComplete='email' value={formData.email} onChange={handleChange} type="email" id="email" placeholder={t('contactForm.emailPlaceholder')} className="dark:text-white width h-15 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg focus:outline-none" />
                        {errors.email && <p className="text-left my-3 text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <textarea value={formData.message} onChange={handleChange} id="message" placeholder={t('contactForm.messagePlaceholder')} className="dark:text-white width h-30 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-lg focus:outline-none" rows={4}></textarea>
                    {errors.message && <p className="text-left my-3 text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button type="submit" className="cursor-pointer px-4 py-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover transition">{t('contactForm.send')}</button>
            </form>
        </section>
    )
}