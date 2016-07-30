<?php
include '../DAO/documentoDAO.php';
include '../utils/connDB.php';

// Conectando y seleccionado la base de datos  
$db= new connDB();
$conn=$db->InitDB();

$p=new documentoDAO();
$p->Select();


// Cerrando la conexión
pg_close($conn);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

