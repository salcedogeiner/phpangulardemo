<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of videoDAO
 *
 * @author Salcedo
 */
class documentoDAO {
    //put your code here
    
public function Select() {
    
$query = 'SELECT * FROM db_foro.documento';
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());
// Imprimiendo los resultados en HTML
$vd=  pg_fetch_all($result);
 echo json_encode($vd, JSON_NUMERIC_CHECK);
 //echo pg_affected_rows($result);
 
 //pg_free_result($result);        
    }
    
    public function Insert($libro) {
        
        $query = 'INSERT INTO db_foro.documento VALUES('.$libro->id_documento.','
                . '"'.$libro->titulo.'","'.$libro->descripcion.'","'.$libro->url.'")';
        
        pg_query($query) or die('La consulta fallo: ' . pg_last_error());
        
        //echo $param;
        
    }
        
}
