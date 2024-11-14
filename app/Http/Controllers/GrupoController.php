<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\registrogrupal;
use Illuminate\Support\Facades\Validator;

class GrupoController extends Controller
{
    public function storeGrupal(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'ID_atenciongrupal' => 'required|integer',
            'user_id' => 'required|integer',
            'Nro_session' => 'required|string',
            'Fecha' => 'required|date',
            'Tema' => 'required|string',
            'ResultadoEsperado' => 'required|string',
            'NroEstudiantesVarones' => 'required|integer',
            'NroEstudiantesMujeres' => 'required|integer',
            'CumplimientoObjetivo' => 'required|string',
            'InteresDelTema' => 'required|string',
            'ParticipacionAlumnos' => 'required|string',
            'AclaracionDudas' => 'required|string',
            'ReprogramacionDelTema' => 'required|string',
            'Ciclo' => 'required|string',
            'ComentarioSignificativo' => 'required|string',
            'AnimacionMotivacion' => 'required|string',
            'ApropiacionDesarrollo' => 'required|string',
            'TransferenciaPracticaCompromiso' => 'required|string',
            'Evaluacion' => 'required|string',
        ]);

        $alumnos = registrogrupal::create([
            'ID_atenciongrupal'  => $request ->ID_atenciongrupal,
            'user_id'  => $request ->user_id,
            'Nro_session'=> $request ->Nro_session,
            'Fecha'=> $request ->Fecha,
            'Tema'=> $request ->Tema,
            'ResultadoEsperado'=> $request ->ResultadoEsperado,
            'NroEstudiantesVarones'=> $request ->NroEstudiantesVarones,
            'NroEstudiantesMujeres'=> $request ->NroEstudiantesMujeres,
            'CumplimientoObjetivo'=> $request ->CumplimientoObjetivo,
            'InteresDelTema'=> $request ->InteresDelTema,
            'ParticipacionAlumnos'=> $request ->ParticipacionAlumnos,
            'AclaracionDudas'=> $request ->AclaracionDudas,
            'ReprogramacionDelTema'=> $request ->ReprogramacionDelTema,
            'Ciclo'=> $request ->Ciclo,
            'ComentarioSignificativo'=> $request ->ComentarioSignificativo,
            'AnimacionMotivacion'=> $request ->AnimacionMotivacion,
            'ApropiacionDesarrollo'=> $request ->ApropiacionDesarrollo,
            'TransferenciaPracticaCompromiso'=> $request ->TransferenciaPracticaCompromiso,
            'Evaluacion'=> $request ->Evaluacion

         ]);
    }
}
