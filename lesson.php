<?php

class Lesson {
    // Properties
    private $lessonId;
    private $courseId;
    private $lessonTitle;
    private $lessonContent;

    // Constructor
    public function __construct($lessonId, $courseId, $lessonTitle, $lessonContent) {
        $this->lessonId = $lessonId;
        $this->courseId = $courseId;
        $this->lessonTitle = $lessonTitle;
        $this->lessonContent = $lessonContent;
    }

    //getters

    public function getlessonId(){
        return $this->lessonId;
    }

    public function getcourseId(){
        return $this->courseId;
    }

    public function getlessonTitle(){
        return $this->lessonTitle;
    }

    public function getlessonContent(){
        return $this->lessonContent;
    }

    //setters

    public function setlessonId($lessonId){
        $this->lessonid=$lessonid;
    }

    public function setcourseId($courseId){
        $this->courseid=$courseid;
    }

    public function setlessonTitle($lessonTitle){
        $this->lessonTitle=$lessonTitle;
    }

    public function setlessonContent($lessonContent){
        $this->lessonContent=$lessonContent;
    }
    ?>