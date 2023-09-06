'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '@/components/Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
    from: string;
    subject: string;
    message: string;
};

const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: '',
};
export default function ContactForm() {
    const [form, setForm] = useState<Form>(DEFAULT_DATA);
    const [banner, setBanner] = useState<BannerData | null>(null);
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // node mailer로 보내기
        sendContactEmail(form)
            .then(() => {
                setBanner({ message: '메일 전송을 성공했습니다.', state: 'success' });
                setForm(DEFAULT_DATA);
            })
            .catch(() => {
                setBanner({ message: '메일 전송을 실패했습니다.', state: 'error' });
            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null);
                }, 3000);
            });
    };
    return (
        <section className="max-w-md w-full">
            {banner && <Banner banner={banner} />}
            <form
                onSubmit={onSubmit}
                className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
            >
                <label htmlFor="from" className="font-semibold">
                    Your Email
                </label>
                <input
                    type="email"
                    className="text-black"
                    id="from"
                    name="from"
                    required
                    autoFocus
                    value={form.from}
                    onChange={onChange}
                />
                <label htmlFor="subject" className="font-semibold">
                    Subject
                </label>
                <input
                    type="text"
                    className="text-black"
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={onChange}
                />
                <label htmlFor="message" className="font-semibold">
                    Message
                </label>
                <textarea
                    rows={10}
                    className="text-black"
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={onChange}
                />
                <button className="bg-cyan-500 text-black hover:bg-cyan-400 rounded-lg font-semibold">Submit</button>
            </form>
        </section>
    );
}
