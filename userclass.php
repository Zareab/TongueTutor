<?php

class User {
    // Properties
    private $UserID = null;
    private $email;
    private $name;
    private $surname;
    private $dateOfBirth;
    private $gender;
    private $password;

    // Constructor
    public function __construct($UserID,$name, $surname, $dateOfBirth, $gender, $email, $password) {
        $this->name = $name;
        $this->surname = $surname;
        $this->dateOfBirth = $dateOfBirth;
        $this->gender = $gender;
        $this->email = $email;
        $this->password = $password;
    }

    function __get($name){
        return $this->$name;

    }

    function __set($name,$value){
        return $this->$name = $value

    }


// getters
public function getUserID(){
    return $this->UserID;
}

public function getemail(){
    return $this->email;
}

public function getname(){
    return $this->name;
}

public function getsurname(){
    return $this->surname;
}

public function getdateOfBirth(){
    return $this->dateOfBirth;
}

public function getgender(){
    return $this->gender;
}

public function getpassword(){
    return $this->password;
}




// setters
public function setUserID($UserID){
    $this->UserID=$UserID;
}

public function setemail($email){
    $this->email=$email;
}

public function setname($name){
    $this->name=$name;
}

public function setsurname($surname){
    $this->surname=$surname;
}

public function setdateOfBirth($dateOfBirth){
    $this->dateOfBirth=$dateOfBirth;
}

public function setgender($gender){
    $this->gender=$gender;
}

public function setpassword($password){
    $this->password=$password;
}
  ?>  