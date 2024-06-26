import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
    const { email, subject, message } = await request.json();
    console.log(email, subject, message);

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [email],
            subject: subject,
            react: 
            (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for connecting us.</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
    }
}
