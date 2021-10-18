module.exports = function sendEmail(toAddress, templateData) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = {
    to: toAddress,
    from: "welcome@5k9.run",
    templateId: "d-5173cf90f8f940b898277cf885060175",
    dynamicTemplateData: templateData,
  };

  sgMail
    .send(email)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
