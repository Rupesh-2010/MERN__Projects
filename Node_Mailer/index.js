require("dotenv").config();
const nodemailer = require("nodemailer");

// Create transporter using environment variables
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    },
    logger: true,
    debug: true,
});

// Send email with the defined transport object
async function main() {
try {
    const info = await transporter.sendMail({
      from: "<${process.env.EMAIL}>", // sender address
      to: process.env.TO_EMAIL, // recipient email from .env
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent: %s", info.messageId);
} catch (error) {
    console.error("Error sending email:", error);
}
}

main().catch(console.error);