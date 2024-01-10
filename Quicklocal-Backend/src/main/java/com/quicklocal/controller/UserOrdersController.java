package com.quicklocal.controller;

import com.quicklocal.model.ServicesModel;
import com.quicklocal.service.UserOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user-orders")
public class UserOrdersController {

    @Autowired
    private UserOrdersService userOrdersService;

    @GetMapping
    public ResponseEntity<List<ServicesModel>> getAllUserOrders() {
        try {
            List<ServicesModel> userOrders = userOrdersService.getAllUserOrders();
            return new ResponseEntity<>(userOrders, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
