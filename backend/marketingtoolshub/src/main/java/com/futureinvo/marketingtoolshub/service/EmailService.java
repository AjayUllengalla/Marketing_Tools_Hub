package com.futureinvo.marketingtoolshub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private GeminiService geminiService;
	
	public String generateEmail(String topic) {
		String prompt = "Generate a proffesional Email template for " + topic;
		return geminiService.generate(prompt);
	}
	
	public String generateSubjectLine(String topic) {
		String prompt = "Generate a proper and professional subject lines for this " + topic;
		return geminiService.generate(prompt);
	}
}
