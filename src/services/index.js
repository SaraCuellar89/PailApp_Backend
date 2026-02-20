const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

const SECRET = process.env.JWT_SECRET;


// ================== Funciones para la seguridad de las contraseñas ==================
// Encriptado de contraseñas
const encriptar_contrasena = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(contrasena, salt);
};

const comparar_contrasena = async (contrasena, hash) => {
  return await bcrypt.compare(contrasena, hash);
};


// ================== Funciones para crear tokens ==================
// Tokens de inicio de sesion
const generar_token = (usuario) => {
  return jwt.sign(
    {
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre_usuario,
      correo: usuario.correo,
      avatar: usuario.avatar
    },
    SECRET,
    { expiresIn: "7d" }
  );
};

const verificar_token = (token) => {
  return jwt.verify(token, SECRET);
};


// ================== Funciones para enviar correos ==================
// Configurar transporte
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Función para enviar correo
const enviar_correo_incio_sesion = async (destinatario, nombre) => {
  const mailOptions = {
    from: `"PailApp" <${process.env.EMAIL_USER}>`,
    to: destinatario,
    subject: "Inicio de Sesion exitoso",
    html: `
      <h2>¡Hola ${nombre}! 👋</h2> 

      <p>¡Nos alegra verte de nuevo! 🎉</p> 

      <p>Has iniciado sesión correctamente y ya puedes comenzar a explorar nuevos platos deliciosos que tenemos para ti. 🍽️✨</p> 

      <p>Prepárate para descubrir sabores increíbles y vivir una experiencia gastronómica única.</p> <br> 

      <div style="text-align:center;"> 
        <img src="http://st.depositphotos.com/1001911/1554/v/450/depositphotos_15540341-stock-illustration-thumb-up-emoticon.jpg" alt="Todo listo" width="120"> 
      </div> 
      
      <br> 
      
      <p style="font-size:12px; color:gray;"> Este es un mensaje automático, por favor no respondas a este correo. </p>
    `
  };

  return await transporter.sendMail(mailOptions);
};



// ================== Exportar funciones ==================
module.exports = {
    encriptar_contrasena, 
    comparar_contrasena,
    generar_token,
    verificar_token,
    enviar_correo_incio_sesion
}
