<?php
include './utils/connDB.php';
include './DAO/videoDAO.php';

// Conectando y seleccionado la base de datos  
$db= new connDB();
$conn=$db->InitDB();

$p=new videoDAO();
$p->Select();


// Cerrando la conexión
pg_close($conn);
?>