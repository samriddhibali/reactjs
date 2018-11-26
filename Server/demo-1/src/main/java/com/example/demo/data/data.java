//package com.example.demo.data;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//
//@Entity
//public class data {
//    @Id
//    @GeneratedValue
//    private String dept;
//    private int sal;
//    private String dob;
//    private String name;
//    
//    public data() {}
//    public data(String name) {
//        this.name = name;
//    }
//    public String getDept() {
//		return dept;
//	}
//	public void setDept(String dept) {
//		this.dept = dept;
//	}
//	public int getSal() {
//		return sal;
//	}
//	public void setSal(int sal) {
//		this.sal = sal;
//	}
//	public String getDob() {
//		return dob;
//	}
//	public void setDob(String dob) {
//		this.dob = dob;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	@Override
//    public String toString() {
//        return "Data{" +
//                "Name: " + name +
//                ", Salary: " + sal + 
//                "Dept.: " + dept +
//                ", DOB: " + dob +
//                '}';
//    }
//}