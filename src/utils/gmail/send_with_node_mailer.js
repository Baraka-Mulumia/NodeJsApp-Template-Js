//use nodemailer to send email

import HandleError from "../HandleError";
import dotenv from "dotenv";
import { infoLog } from "../logger";
import nodemailer from "nodemailer";

dotenv.config();
const MAIL_TRANSPORT_PASSWORD = process.env.MAIL_TRANSPORT_PASSWORD;

const sendWithNodeMailer = async ({
    subject,
    to = "johncmiles2@gmail.com",
    html = "",
    cc = [],
    bcc = [],
}) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "<sender-email>",
                pass: MAIL_TRANSPORT_PASSWORD,
            },
        });

        const mailOptions = {
            from: "<sender-email>",
            to,
            cc,
            bcc,
            subject,
            html,
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                HandleError("Error sending email", error);
                reject(error);
            } else {
                infoLog("Email sent: " + info.response);
                resolve(info);
            }
        });
    });
};

export default sendWithNodeMailer;
