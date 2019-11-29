const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  auth: {
    user: 'stories@orphansmap.com',
    pass: 'stories345%',
  },
  secure: true,
  logger: true,
});

const send = ({ email, name, letter }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const body = `
    Пришла новая история с сайта Orphansmap

    ФИО: ${letter.name}
    E-mail: ${letter.email}
    
    ${letter.message}
  `;
  const message = {
    from: 'Сайт Orphansmap <stories@orphansmap.com>',
    to: ['insider.sofia@gmail.com', 'stories@orphansmap.com'],
    subject: 'Новая история с сайта Orphansmap',
    text: body,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

module.exports = send;
