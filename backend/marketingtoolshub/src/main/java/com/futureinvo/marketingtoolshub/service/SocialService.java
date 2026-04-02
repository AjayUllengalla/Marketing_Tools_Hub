package com.futureinvo.marketingtoolshub.service;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

//import com.futureinvo.marketingtoolshub.exception.CustomException;


@Service

public class SocialService {

	@Autowired
	private  GeminiService gemini;

	public String generateHashTags(String keyword){
		
		if(keyword == null || keyword.isBlank()) {
			throw new CustomException("Must enter topic or related keyword");
		}
		String prompt = "Generate 10 trending hashtags for: " + keyword;
		return gemini.generate(prompt); 
	}
	
	public String generateDescription(String descripption) {
		String prompt = "Generate a Description for post or video or reel " + descripption;
		return gemini.generate(prompt);
	}

	
}
