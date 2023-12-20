import * as emailjs from "emailjs-com";

const sendEmail = (name, email) => {
  const data = {
    to_name: name,
    to_email: email,
  };
  emailjs
    .send("service_nj9kp7i", "template_mkj5e55", data, "YYsamJ2IRmZE7lWSU")
    .then(
      (result) => {
        console.log(result);
        return 200;
      },
      (error) => {
        return 400;
      }
    );
};

export { sendEmail };
