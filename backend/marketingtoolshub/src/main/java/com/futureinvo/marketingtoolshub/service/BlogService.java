package com.futureinvo.marketingtoolshub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class BlogService {

	@Autowired
	private GeminiService geminiService;
	
	public String generateBlogTitle(String topic) {
		try {
			String prompt = "Generate professional blog title and suggest headings for the topic of " + topic;
		return geminiService.generate(prompt);
		} catch (Exception e) {
			throw new CustomException("Error while generating "+ e.getMessage());
		}
		
	}
	
	public String generateBlog(String topic) {
		
		if(topic.length() < 3) {
			throw new CustomException("Enter must 4 or more characters for blog ");
		}
		try {
			String prompt = "Generate a blog for the given topic with a clear and clean blog " + topic;
			return geminiService.generate(prompt);
		} catch (Exception e) {
			throw new CustomException("Error while generating blog: " + e.getMessage());
		}
	}
}
