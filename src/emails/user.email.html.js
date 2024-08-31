export const emailHtml = (token, redirectLink) => {  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Confirmation</title>
  <style>
    body {
            font-family: 'Comic Sans MS', cursive;

      background-color: #fff0f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .header {
      background-color: #ff85a2;
      padding: 30px;
      text-align: center;
      font-size: 28px;
      color: #fff;
    }
    .header img {
      width: 50px;
      vertical-align: middle;
    }
    .content {
      padding: 30px;
      text-align: center;
      color: #444;
    }
    .content p {
      font-size: 20px;
      line-height: 1.8;
    }
    .button {
      display: inline-block;
      margin-top: 30px;
      padding: 15px 30px;
      background-color: #ff4d88;
      color: #fff;
      text-decoration: none;
      border-radius: 10px;
      font-size: 20px;
      transition: background-color 0.3s;
    }
    .button:hover {
      background-color: #ff0055;
    }
    .footer {
      background-color: #ff85a2;
      padding: 15px;
      text-align: center;
      font-size: 16px;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://img.icons8.com/ios-filled/50/000000/flower.png" alt="Flower Icon">
       You're Almost There!
       <img src="https://img.icons8.com/ios-filled/50/000000/flower.png" alt="Flower Icon">
    </div>
    <div class="content">
      <p>Hello Lovely! 🌺</p>
      <p>Click the button below to confirm your email and start your shopping journey!</p>
      <a href="${redirectLink}${token}" class="button">Confirm Email</a>
    </div>
    <div class="footer">
      &copy; 2024 Nada Co.
    </div>
  </div>
</body>
</html>

  `;
};
