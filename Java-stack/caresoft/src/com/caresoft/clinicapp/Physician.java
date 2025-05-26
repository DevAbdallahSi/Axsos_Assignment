package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;

	
	// TO DO: Constructor that takes an IDcopy
    public Physician (int id){
        this.id=id;
    }
    // TO DO: Implement HIPAACompliantUser!
    @Override
    public boolean assignPin(int pin){
        int number = String.valueOf(pin).length();
        if (number == 4){
            setPin(pin);
            return true;
        }
        else {
            System.out.println("your pin is in correct ");
            return false;
        }
    }
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID){
        if(this.id.equals(confirmedAuthID)){
            return true;
        }else{
            return false;
        }
    }
    
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
	
    // TO DO: Setters & Getters

    public ArrayList<String> getPatientNotes() {
        return patientNotes;
    }

    public void setPatientNotes(ArrayList<String> patientNotes) {
        this.patientNotes = patientNotes;
    }
}
