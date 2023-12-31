import mongoose from 'mongoose';


const UsuarioSchema = mongoose.Schema({

	nombre:{


				type:String,
				required:true,
				trim:true


			},
	correo:{

				type:String,
				required:true,
				trim:true,
				unique:true

			},
	token:{


				type:String,



		  },

	confirmado:{


			type:Boolean,
			default:false

	}


},{

	timestamps:true

});


const Usuario = mongoose.model("Usuario",UsuarioSchema);

export default Usuario;