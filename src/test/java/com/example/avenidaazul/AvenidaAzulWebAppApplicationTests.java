package com.example.avenidaazul;

import com.example.avenidaazul.service.EmailService;
import com.example.avenidaazul.controller.ContactController;
import com.example.avenidaazul.model.Contacto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AvenidaAzulWebAppApplicationTests {

    @Autowired
    private ContactController contactController;

    @MockBean
    private EmailService emailService;

    @Test
    void contextLoads() {
    }


}
