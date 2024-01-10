package com.quicklocal.service;

import com.quicklocal.model.ServicesModel;
import com.quicklocal.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOrdersService {

    @Autowired
    private ServicesRepository servicesRepository;

    public List<ServicesModel> getAllUserOrders() {
        // Assuming you have a method in the repository to fetch user orders
        return servicesRepository.findAllUserOrders();
    }
}
