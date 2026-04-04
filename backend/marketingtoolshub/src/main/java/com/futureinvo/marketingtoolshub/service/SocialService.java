package com.futureinvo.marketingtoolshub.service;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;


@Service
public class SocialService {

	@Autowired
	private  GeminiService gemini;

	public String generateHashTags(String keyword){ // method to generate hashtags
		
		if(keyword == null || keyword.isBlank()) {
			throw new CustomException("Must enter topic or related keyword"); // validation for empty keyword
		} else if(keyword.length() < 4) {
			throw new CustomException("Keyword must have atleast 4 characters"); // validation for keyword length
		}
		String prompt = "Generate 10 trending hashtags for: " + keyword;
		return gemini.generate(prompt); 
	}
	
	public String generateDescription(String description) {

		if(description == null || description.isBlank()) {
			throw new CustomException("Must enter a topic or related content"); // validation for empty description
		} else if(description.length() > 500) {
			throw new CustomException("Description must be less than 500 characters"); // validation for description length
		} else if(description.length() < 10) {
			throw new CustomException("Description must be at least 10 characters long"); // validation for description length
		}
		String prompt = "Generate a Description or caption  for post or video or reel for social media post " + description;
		return gemini.generate(prompt);
	}

	
}
