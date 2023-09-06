export type BannerData = {
    message: string;
    state: 'idle' | 'loading' | 'success' | 'error';
};
export default function Banner({ banner: { message, state } }: { banner: BannerData }) {
    const isSuccess = state === 'success';
    const icon = isSuccess ? '✅' : '❌';
    return <p className={`rounded-xl w-full text-center p-2 ${isSuccess ? 'bg-green-300' : 'bg-red-300'}`}>{`${icon} ${message}`}</p>;
}
