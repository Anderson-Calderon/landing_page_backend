import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {

  const { correo, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "anderson.calderoncampos@gmail.com",
      pass: "rxutdzksyoctbfip",
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Anderson Calderón - Desarrollador Web" <anderson.calderoncampos@gmail.com>',
    to: correo,
    subject: "Seminario De Desarrollo Web - Confirma Tu Asistencia",
    text: "Confirma tu asistencia al seminario de desarrollo web",
    html: `<p>Hola: ${nombre} Confirma tu asistencia al seminario de Desarrollo Web</p>
    <p>Tu cupo al seminario de DW sólo se confirmara haciendo click en el siguiente enlace: 

    <a   href="${process.env.FRONT_URL}/confirmar/${token}">

    Confirmar Asistencia


    </a>
    
    <p>Si tu no te inscribiste a este seminario de DW, puedes ignorar el mensaje</p>
    
    
    `,
  });



  console.log("HOLA DESDE nodemailer");

  console.log(datos);
}

