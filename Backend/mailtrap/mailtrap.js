import { MailtrapClient } from "mailtrap";
import dotenv from 'dotenv';
const TOKEN = "2107a80824b3f50b561609c87a126e0a";
export const mailtrapClient = new MailtrapClient({
  // token: process.env.MAILTRAP_TOKEN,
  token:TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Bhavesh",
};
// const recipients = [
//   {
//     email: "sahubhavesh026@gmail.com",
//   }
// ];

// mailtrapClient
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
