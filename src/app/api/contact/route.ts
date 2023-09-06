import * as yup from 'yup';
import { EmailData, sendEmail } from '@/service/email';

const bodySchema = yup.object().shape({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});
export async function POST(req: Request) {
    const body = await req.json();

    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({ message: '메일 전송에 실패 하였습니다.' }), { status: 400 });
    }

    return sendEmail(body)
        .then(
            () =>
                new Response(
                    JSON.stringify({
                        message: '메일이 성공적으로 전송되었습니다.',
                    }),
                ),
        )
        .catch((error) => {
            console.log('error : ', error);
            return new Response(
                JSON.stringify({
                    message: '메일 전송에 실패하였습니다.',
                }),
                { status: 500 },
            );
        });
}
