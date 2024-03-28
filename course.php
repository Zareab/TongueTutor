<?php

class Course {
    // Properties
    private $courseId;
    private $languageId;
    private $courseName;
    private $courseDescription;

    // Constructor
    public function __construct($courseId, $languageId, $courseName, $courseDescription) {
        $this->courseId = $courseId;
        $this->languageId = $languageId;
        $this->courseName = $courseName;
        $this->courseDescription = $courseDescription;
    }

    //getters
    public function getcourseId(){
        return $this->courseId;
    }

    public function getlanguageId(){
        return $this->languageId;
    }

    public function getcourseName(){
        return $this->courseName;
    }

    public function getcourseDescription(){
        return $this->courseDescription;
    }

    //setters

    public function setcourseId($courseId){
        $this->courseId=$courseId;
    }


    public function setlanguageId($languageId){
        $this->languageId=$languageId;
    }

    public function setcourseName($courseName){
        $this->courseName=$courseName;
    }

    public function setcourseDescription($courseDescription){
        $this->courseDescription=$courseDescription;
    }
    ?>