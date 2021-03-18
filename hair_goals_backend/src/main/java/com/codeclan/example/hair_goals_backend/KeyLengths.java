package com.codeclan.example.hair_goals_backend;

public enum KeyLengths {

    SHORT(6),
    BOB(20),
    SHOULDER(30),
    WAIST(75),
    KNEES(100),
    TOES(150);


    private final int keyLength;


    KeyLengths(int keyLength){
        this.keyLength = keyLength;
    }

    public int getKeyLength(){
        return this.keyLength;
    }
}
