<?php

class language {
// Properties
private $languageId;
private $languagename;
private $difficultyLevel;

// Constructor
public function __construct($languageId, $languagename, $difficultyLevel) {
    $this->languageId = $languageId;
    $this->languagename = $languagename;
    $this->difficultyLevel = $difficultyLevel;
}

//getters
public function getlanguageId(){
    return $this->languageId;
}

public function getlanguagename(){
    return $this->languagename;
}

public function getdifficultyLevel(){
    return $this->difficultyLevel;
}

//setters
public function setlanguageId(){
    $this->languageId=$languageId;
}

public function setlanguagename(){
    $this->languagename=$languagename;
}

public function setdifficultyLevel(){
    $this->difficultyLevel=$difficultyLevel;
}
?>