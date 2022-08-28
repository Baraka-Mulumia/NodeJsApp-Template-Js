const serverErrorHtml = info => {
    return `<!DOCTYPE html>
   <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${info}</title>
    <style>
      .container {
        width: 80%;
        margin: 0 auto;
        background-color: #f8f8f8;
        border-radius: 10px;
        padding: 16px;
        max-width: 600px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
      }
      .header {
        text-align: center;
        padding: 5px 0px;
      }
      .left-align {
        text-align: left;
      }
      .img {
        width: 250px;
        height: auto;
        border-radius: 10%;
        margin: auto;
        display: block;
      }
      .gray {
        color: rgb(102, 106, 97);
      }
      .blue {
        color: #4141ee;
      }
      .lead {
        font-weight: 500;
        color: rgb(72, 72, 72);
      }

      .red {
        color: #ff0000;
      }
      .link {
        color: #4141ee;
        text-decoration: none;
        border-bottom: 1px solid #4141ee;
        padding: 2px 0px;
      }
      .dark {
        color: rgb(72, 72, 72);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h4 class="header red left-align">System Error Notifications</h4>
      <img
        class="img"
        src="https://res.cloudinary.com/mshindi-creations/image/upload/v1661447866/action-images/error-1_e8sy0t.jpg"
        alt="Iworker Internal Mails"
      />
      <h2 class="header">${info}</h2>
      <p>
        <strong class="gray"> Hi Developer Baraka, </strong>
      </p>
      <p class="lead">
        We wish to inform you that the Google sheets system encountered an error.
        <strong class="gray">
            ${info}
        </strong>
      </p>
      <br />
      <p class="lead">
        Best regards,
        <br />
        <strong class="gray">Iworker Server Notifications</strong>
      </p>
    </div>
  </body>
</html>
    `;
};

export default serverErrorHtml;
