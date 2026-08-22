'use server'
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';




export async function submitOffer(data: {
    name: string;
    email: string;
    phone: string;
    category: string;
    description: string;
}) {
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: true,
            auth: {
                user: "info@instagoldbuyers.com",
                pass: "yB/7cu79_t8|s",
            },
        } as SMTPTransport.Options);

        const mailOptions = {
            from: "info@instagoldbuyers.com",
            to: "malin.pramoditha@gmail.com",
            subject: "test email",
            text: "test email",
            html: `<p>test email</p>`,
        };

        const info = await transporter.sendMail(mailOptions);

        return { success: true, messageId: info.messageId };

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong" };
    }

}