package com.futureinvo.marketingtoolshub.service;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

//import com.futureinvo.marketingtoolshub.exception.CustomException;


@Service
public class SocialService {

	@Autowired
	private  GeminiService gemini;

	public String generateHashTags(String keyword){ // method to generate hashtags
		
		if(keyword == null || keyword.isBlank()) {
			throw new CustomException("Must enter topic or related keyword"); // validation for empty keyword
		}
		String prompt = "Generate 10 trending hashtags for: " + keyword;
		return gemini.generate(prompt); 
	}
	
	public String generateDescription(String description) {

		if(description == null || description.isBlank()) {
			throw new CustomException("Must enter a topic or related content"); // validation for empty description
		}
		String prompt = "Generate a Description for post or video or reel " + description;
		return gemini.generate(prompt);
	}

	
}
