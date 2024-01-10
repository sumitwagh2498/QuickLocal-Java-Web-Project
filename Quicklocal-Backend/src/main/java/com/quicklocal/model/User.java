package com.quicklocal.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;



@Entity
@Table(name = "user_registration")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "phone")
    private long phone;

    @Column(name = "password")
    private String password;

    @Column(name = "address")
    private String address;

    @Column(name = "pincode")
    private String pincode;
    
    @Column(name = "approval_status")
    private boolean approvalStatus;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ServicesModel> services;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public boolean isApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

	public List<ServicesModel> getServices() {
		return services;
	}

	public void setServices(List<ServicesModel> services) {
		this.services = services;
	}
    
    
    
}
