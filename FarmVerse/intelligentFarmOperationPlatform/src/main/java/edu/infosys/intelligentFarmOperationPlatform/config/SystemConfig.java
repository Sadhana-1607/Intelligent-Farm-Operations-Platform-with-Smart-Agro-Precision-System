package edu.infosys.intelligentFarmOperationPlatform.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import java.util.List;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
 
@Configuration
@EnableMethodSecurity
public class SystemConfig {
	
	@Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
	  return configuration.getAuthenticationManager();
    }
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	    http
	      .cors(Customizer.withDefaults())
	      .csrf(csrf -> csrf.disable())
	      .authorizeHttpRequests(auth -> auth
	    		    .requestMatchers("/farmverse/login/**").permitAll()
	    		    .requestMatchers("/farmverse/logout").permitAll()
	    		    .requestMatchers("/farmverse/crop-input/**").permitAll()
	    		    .requestMatchers("/farmverse/**").permitAll()
	    		    .anyRequest().authenticated()
	    		)
	      .logout(logout -> logout
	            .logoutUrl("/farmverse/logout")
	            .invalidateHttpSession(true)
	            .deleteCookies("JSESSIONID")
	            .logoutSuccessHandler((request, response, authentication) -> {
	                response.setStatus(200);
	                response.getWriter().write("Logout success");
	            })
	      );
	    return http.build();
	}
	
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {

	    CorsConfiguration configuration = new CorsConfiguration();

	    configuration.setAllowedOrigins(List.of("http://localhost:3636"));
	    configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	    configuration.setAllowedHeaders(List.of("*"));
	    configuration.setAllowCredentials(true);

	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);

	    return source;
	}

}
