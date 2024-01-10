package com.quicklocal.dto;

public class AdminDto {

    private String name;
    private long phone;
    private String email;
    private String password;

  
    public AdminDto() {
    }

    public AdminDto(String name, long phone, String email, String password) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

    
}
