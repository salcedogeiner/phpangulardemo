<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of connDB
 *
 * @author Salcedo
 */
class connDB {
    //put your code here
    
    private $dbName= "phpdb";
    private $dbUser= "postgres";
    private $dbPass= "2648618";
    private $dbhost= "localhost";
    

    function __construct() {
        
    }

    public function &InitDB(){
        $connStr=("host=".$this->dbhost." dbname=".$this->dbName." user=".$this->dbUser." password=".$this->dbPass);
        //echo $connStr;
    $dbconn = pg_connect($connStr);
        
/* @var $dbconn type */
        return $dbconn; 
    }
    
    
    
}
