package com.futureinvo.marketingtoolshub.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;  
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class GeminiService { //service for GeminiAI calling

	
    @Value("${gemini.api.key}")
    private String apiKey; //mapping API key here

    @Value("${gemini.url}")
    private String apiUrl; // mapping URL

    private RestTemplate restTemplate = new RestTemplate();

    public String generate(String prompt) {
        
      // Construct the API request URL
        String url = apiUrl + "?key=" + apiKey;

       // Set up the request headers and body
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

       // Construct the request body with the prompt
        String body = """
        {
          "contents": [{
            "parts": [{"text": "%s"}]
          }]
        }
        """.formatted(prompt);

      // Create the HTTP entity with headers and body
        HttpEntity<String> request = new HttpEntity<>(body, headers);

        // Make the API call and handle the response
        try {
        	ResponseEntity<Map> response =
                    restTemplate.postForEntity(url, request, Map.class);
        	  List candidates = (List) response.getBody().get("candidates");

              Map firstCandidate = (Map) candidates.get(0);
              Map content = (Map) firstCandidate.get("content");
              List parts = (List) content.get("parts");

              Map part = (Map) parts.get(0);
              return ((Map) parts.get(0)).get("text").toString(); // response
        } catch(HttpServerErrorException serverError) {
        	throw new CustomException("AI Server is busy please try again later"+ serverError.getStatusCode()); // Handle server errors
        }

       
      
        
    }
}