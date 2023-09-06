import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/8FD3DD9A-43A8-4A92-AF05-CF32D6689802.jpg';

export default function Hero() {
    return (
        <section className="text-center">
            <Image
                className="rounded-full mx-auto"
                src={profileImage}
                alt="Picture of the autor"
                width={250}
                height={250}
                priority
            />
            <h2 className="text-3xl font-bold mt-2">Hi, I'm Corner</h2>
            <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
            <p>효율을 중시하는 사람, dev-corner</p>
            <Link href="/contact">
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
            </Link>
        </section>
    );
}
