// UserRepository.java
package com.quicklocal.repository;

import com.quicklocal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    
    // Assuming phone is of type long
    User findByPhoneAndPassword(long phone, String password);
}
