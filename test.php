<?php

class Test {
    // Properties
    private $testId;
    private $lessonId;
    private $testQuestions;
    private $testAnswers;

    // Constructor
    public function __construct($testId, $lessonId, $testQuestions, $testAnswers) {
        $this->testId = $testId;
        $this->lessonId = $lessonId;
        $this->testQuestions = $testQuestions;
        $this->testAnswers = $testAnswers;
    }

    //getters
    public function gettestId(){
        return $this->testId;
    }

    public function getlessonId(){
        return $this->lessonId;
    }

    public function gettestQuestions(){
        return $this->testQuestions;
    }

    public function gettestAnswers(){
        return $this->testAnswers;
    }

    //setters

    public function settestId($testId){
        $this->testId=$testId;
    }

    public function setlessonId($lessonId){
        $this->lessonId=$lessonId;
    }

    public function settestQuestions($testQuestions){
        $this->testQuestions=$testQuestions;
    }

    public function settestAnswers($testAnswers){
        $this->testAnswers=$testAnswers;
    }
    ?>