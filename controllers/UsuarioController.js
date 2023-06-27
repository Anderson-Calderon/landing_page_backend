import Usuario from '../models/UsuarioModel.js';
import generarId from '../helpers/generarId.js';
import {emailRegistro} from '../helpers/email.js';


const registrar = async (req,res)=>{

	const {correo,nombre} = req.body;

	const existeCorreo = await Usuario.findOne({correo});

	

	if(existeCorreo){

		const error = new Error("Usuario ya registrado");
    	return res.status(400).json({ msg: error.message });

	}
	
	try{

		const usuario = new Usuario(req.body);

		usuario.token=generarId();

		emailRegistro({nombre,correo,token:usuario.token});

		const nuevoUsuario = await  usuario.save();






		res.json(


					{

						"msg":"Te hemos enviado un email a tu correo para que confirmes tu asistencia . Te esperamos !"

					}			

				);

		

	}catch(error){

		console.log("este es un error",error);

		

	}


	
}


const confirmarAsistencia = async (req,res)=>{

	const {token }= req.params;

	const existeUsuario =  await Usuario.findOne({token});

	if(!existeUsuario){

		const error = new Error("url equivoda , haga click en el siguiente enlace para ir al inicio");

		return res.status(403).json({msg:error.message});


	}


	try{


		existeUsuario.token="";

		existeUsuario.confirmado=true;

		await existeUsuario.save();

		res.json({

					msg:"Gracias por confirmar tu asistencia.Te Esperamos!"

					});

	}catch(error){

		console.log("ERROR :"+error.response);


	}


	


}

export {


			registrar,
			confirmarAsistencia


		}