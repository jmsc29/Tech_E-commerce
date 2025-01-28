package com.tech_e_commerce.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        // Configura CORS para todos los endpoints
        registry.addMapping("/**")  // Aplica a todos los endpoints
                .allowedOrigins("http://localhost:3000")  // Permite solicitudes desde el frontend (puedes agregar más URLs si es necesario)
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Métodos HTTP permitidos
                .allowedHeaders("*")  // Permite todos los encabezados
                .allowCredentials(true);  // Permite cookies y autenticación
    }
}
