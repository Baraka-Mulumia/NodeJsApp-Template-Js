//use nodemailer to send email

import { errorLog, infoLog } from "../logger";

import { MAIL_TRANSPORT_PASSWORD } from "../../config/constants";
import { extractErrorMessage } from "../HandleError";
import nodemailer from "nodemailer";

const sendWithNodeMailer = async ({
    subject,
    to = "test@gmail.com",
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
                errorLog("Error sending email " + extractErrorMessage(error));
                reject(error);
            } else {
                infoLog(`[Notified ${to}] about ${subject}`);
                resolve(info);
            }
        });
    });
};

export default sendWithNodeMailer;
