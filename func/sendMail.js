const nodemailer = require('nodemailer');

// Create a transporter object using the Gmail service
let transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' service instead of 'smtp.gmail.com'
  auth: {
    user: 'sahilkumbharkar57@gmail.com', // Gmail account
    pass: 'wbxw njpz ekgd ncfo', // App-specific password
  },
});

// Function to send email
async function sendEmail(toEmail, subject, text) {
  try {
    let info = await transporter.sendMail({
      from: '"Sahil Kumbharkar" <sahilkumbharkar7@gmail.com>', // Sender address should match authenticated email
      to: toEmail, // Receiver's email
      subject: subject, // Subject line
      text: text, // Plain text body
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
