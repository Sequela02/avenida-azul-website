package com.example.avenidaazul.controller;

import com.example.avenidaazul.model.Contacto;
import com.example.avenidaazul.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<HashMap<String, String>> submitContactForm(@RequestBody Contacto contactForm) {

        // Usando el asunto que el usuario ingresó
        String subject = contactForm.getAsunto();

        // Modificando la estructura del mensaje con formato HTML
        String text = "<div style='font-family: Arial, sans-serif;'>"
                + "<h2 style='color: #2C3E50;'>Asunto: " + contactForm.getAsunto() + "</h2>"
                + "<p style='font-size: 16px;'><strong>Has recibido un nuevo mensaje de contacto:</strong></p>"
                + "<p style='font-size: 14px; margin-bottom: 5px;'><strong>Nombre:</strong> " + contactForm.getNombre() + "</p>"
                + "<p style='font-size: 14px; margin-bottom: 20px;'><strong>Correo electrónico:</strong> " + contactForm.getEmail() + "</p>"
                + "<h3 style='color: #34495E;'>Mensaje:</h3>"
                + "<p style='font-size: 14px; border-top: 2px solid #BDC3C7; padding-top: 10px;'>" + contactForm.getMensaje() + "</p>"
                + "</div>";

        emailService.sendHtmlEmail("destinatario@ejemplo.com", subject, text);

        HashMap<String, String> responseMap = new HashMap<>();
        responseMap.put("message", "Formulario recibido con éxito y correo enviado");

        return ResponseEntity.ok(responseMap);
    }







    @PostMapping("/sendTestMail")
    public ResponseEntity<String> sendTestMail() {
        try {
            emailService.sendHtmlEmail(
"r3xedoutlook,es",
                    "Prueba de envío de correo",
                    "¡Hola! Este es un correo de prueba desde Spring Boot."
            );
            return ResponseEntity.ok("Correo enviado con éxito.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error enviando correo: " + e.getMessage());
        }
    }
}
