// ServiceService.java

package com.quicklocal.service;

import com.quicklocal.exception.ServiceServiceException;
import com.quicklocal.model.Service;
import com.quicklocal.model.ServicesModel;
import com.quicklocal.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    public int registerService(Service service) throws ServiceServiceException {
        try {
            service.setStatus(Service.Status.PENDING);
            return serviceRepository.save(service).getId();
        } catch (Exception e) {
            throw new ServiceServiceException("Error registering service: " + e.getMessage());
        }
    }

    public Service login(String email, String password) throws ServiceServiceException {
        try {
            return serviceRepository.findByEmailAndPassword(email, password);
        } catch (Exception e) {
            throw new ServiceServiceException("Error during service login: " + e.getMessage());
        }
    }

    public List<Service> getPendingServices() {
        return serviceRepository.findAllByStatus(Service.Status.PENDING);
    }

    public void approveService(int serviceId) throws ServiceServiceException {
        try {
            Service service = serviceRepository.findById(serviceId)
                    .orElseThrow(() -> new ServiceServiceException("Service not found"));

            // Check if the service is pending before approving
            if (service.getStatus() == Service.Status.PENDING) {
                service.setStatus(Service.Status.APPROVED);
                serviceRepository.save(service);
            } else {
                throw new ServiceServiceException("Service is not pending approval");
            }
        } catch (Exception e) {
            throw new ServiceServiceException("Error approving service: " + e.getMessage());
        }
    }

    public void deleteService(int serviceId) throws ServiceServiceException {
        try {
            Service service = serviceRepository.findById(serviceId)
                    .orElseThrow(() -> new ServiceServiceException("Service not found"));

            // Check if the service is pending before deleting
            if (service.getStatus() == Service.Status.PENDING) {
                serviceRepository.delete(service);
            } else {
                throw new ServiceServiceException("Service is not pending approval");
            }
        } catch (Exception e) {
            throw new ServiceServiceException("Error deleting service: " + e.getMessage());
        }
    }
    
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

	public boolean isServiceApproved(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
	
	
}