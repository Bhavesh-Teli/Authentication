import { mailtrapClient, sender } from "./mailtrap.js";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerficationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("EMail sent successfully", response);
  } catch (error) {
    console.error(`Error sending verfication email `, error);
    throw new Error(`Error sending verification email:${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "d68e0699-530a-481d-ba8e-5135d5ee225d",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending Welcome email `, error);
    throw new Error(`Error sending Welcome email:${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password rest email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "password Reset Succesful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending Welcome email `, error);
    throw new Error(`Error sending Welcome email:${error}`);
  }
};
