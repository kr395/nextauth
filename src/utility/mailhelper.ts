import nodemailer from "nodemailer";

export const sendMail = async ({email, emailType, userId} ) => {
  try {
    //TODO: Configure mail to use it

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
     
    });
    const mailOptions = {
    from: 'test@gmail.com',
    to: email, 
    subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
    html: "<b>Hello world?</b>", // html body 
    }
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse 


  } catch (error:any){
    throw new Error(error.message);
  }
};
