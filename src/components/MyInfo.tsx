import Image from 'next/image';
import MarkdownViewer from '@/components/MarkdownViewer';

const H3_STYLE = 'text-xl font-bold py-3';

const markdown = 'React - Next.js, Vue - Nuxt.js, Node - Express, Git, Clean Code, IntelliJ, VSCode, MySQL';
export default function MyInfo() {
    return (
        <article className="bg-gray-100 w-full mt-6 shadow-lg">
            <div className="text-center p-8">
                <h3 className={H3_STYLE}>Who Am I?</h3>
                <p className="text-sm md:text-md lg:text-lg">
                    개발을 좋아하는 풀스택 개발자
                    <br />
                    효율을 중시하여 사람들이 좋아하는 웹앱을 만들고 싶음
                </p>

                <div className="mx-auto mt-3 w-40 border-b-2 border-b-cyan-400"></div>
                <h3 className={H3_STYLE}>Career</h3>
                <p className="text-sm md:text-md lg:text-lg">
                    <span className="text-sm text-gray-500 font-semibold">2022.05 ~ 2023.08</span> : SG***** 웹 개발팀
                    팀원(^대리)
                    <br />
                    <span className="text-sm text-gray-500 font-semibold">2021.07 ~ 2022.01</span> : DGM*** 웹 개발팀
                    팀원(^주임)
                </p>

                <div className="mx-auto mt-3 w-40 border-b-2 border-b-cyan-400"></div>
                <h3 className={H3_STYLE}>Skills</h3>
                <div>
                    <ul className="text-sm md:text-md lg:text-lg flex items-center justify-center">
                        <li className="flex items-center justify-center">
                            <Image
                                className="mr-3 sm:w-[28px] md:w-[38px]"
                                src="https://edu.ncloud.com/public/img/pass-level-1.svg"
                                alt="NCA"
                                width={22}
                                height={22}
                            />
                            <span className="text-green-500">NAVER Cloud Platform Certified Associate</span>
                        </li>
                        <li>React, Next.js</li>
                        <li>Vue, Nuxt.js</li>
                        <li>Node, Express</li>
                        <li>MySQL</li>
                        <li>Git, Clean Code, IntelliJ, VSCode</li>

                        <Image
                            className="mx-auto sm:max-w-sm max-w-md"
                            src={'/logo_clear_fsj.png'}
                            alt="my skills"
                            width={100}
                            height={100}
                        />
                    </ul>
                </div>
            </div>
        </article>
    );
}
