import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import ContactForm from '@/components/ContactForm';
import { FaBlogger } from 'react-icons/fa';

const LINKS = [
    {
        icons: <AiFillGithub />,
        url: 'https://github.com/c-owner',
    },
    {
        icons: <AiFillInstagram />,
        url: 'https://www.instagram.com/ck__hoon/',
    },
    {
        icons: <FaBlogger />,
        url: 'https://iu-corner.tistory.com/',
    },
    {
        icons: <AiFillMail />,
        url: 'mailto:corner3499@gmail.com',
    },
];
export default function ContactPage() {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold my-2">Contact Me</h2>
            <p>corner3499@gmail.com</p>
            <ul className="flex gap-4 my-2">
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noreferrer" className="text-5xl hover:text-cyan-400">
                            {link.icons}
                        </a>
                    </li>
                ))}
            </ul>
            <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
