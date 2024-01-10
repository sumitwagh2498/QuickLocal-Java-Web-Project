// ServicesService.java
package com.quicklocal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quicklocal.model.ServicesModel;
import com.quicklocal.repository.ServicesRepository;
import com.quicklocal.dto.ServicesDto;

import java.util.List;
import java.util.Optional;

@Service
public class ServicesService {

    @Autowired
    private ServicesRepository servicesRepository;

    public ServicesModel saveService(ServicesModel servicesModel2) {
        ServicesModel servicesModel = new ServicesModel();
        // Map all fields from ServicesDto to ServicesModel
        servicesModel.setName(servicesModel2.getName());
        servicesModel.setPhone(servicesModel2.getPhone());
        servicesModel.setEmail(servicesModel2.getEmail());
        servicesModel.setService(servicesModel2.getService());
        servicesModel.setAddress(servicesModel2.getAddress());
        servicesModel.setCity(servicesModel2.getCity());
        servicesModel.setPinCode(servicesModel2.getPinCode());

        // You can add other mappings here if needed

        return servicesRepository.save(servicesModel);
    }

    public List<ServicesModel> getAllServices() {
        return servicesRepository.findAll();
    }
    
    public ServicesModel updateService(Integer id, ServicesDto updatedServiceDto) {
        Optional<ServicesModel> serviceOptional = servicesRepository.findById(id);
        if (serviceOptional.isPresent()) {
            ServicesModel existingService = serviceOptional.get();
            // Update fields from updatedServiceDto to existingService
            existingService.setName(updatedServiceDto.getName());
            existingService.setPhone(updatedServiceDto.getPhone());
            existingService.setEmail(updatedServiceDto.getEmail());
            existingService.setService(updatedServiceDto.getService());
            existingService.setAddress(updatedServiceDto.getAddress());
            existingService.setCity(updatedServiceDto.getCity());
            existingService.setPinCode(updatedServiceDto.getPinCode());

            // You can add other mappings here if needed

            return servicesRepository.save(existingService);
        } else {
            return null; // Service with the given ID not found
        }
    }

    public boolean deleteService(Integer id) {
        Optional<ServicesModel> serviceOptional = servicesRepository.findById(id);
        if (serviceOptional.isPresent()) {
            servicesRepository.deleteById(id);
            return true;
        } else {
            return false; // Service with the given ID not found
        }
    }
    
    public List<ServicesModel> searchServicesByServiceAndCity(String service, String city) {
        return servicesRepository.findByServiceAndCity(service, city);
    }

    public List<ServicesModel> searchServicesByService(String service) {
        return servicesRepository.findByService(service);
    }

    public List<ServicesModel> searchServicesByCity(String city) {
        return servicesRepository.findByCity(city);
    }
}
