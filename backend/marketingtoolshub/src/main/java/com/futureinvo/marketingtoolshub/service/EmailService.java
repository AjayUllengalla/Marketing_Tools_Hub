package com.futureinvo.marketingtoolshub.service;

import java.util.InputMismatchException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class EmailService {

	@Autowired
	private GeminiService geminiService;
	
	public String generateEmail(String topic) {
		try {
		String prompt = "Generate a proffesional Email template for " + topic;
		return geminiService.generate(prompt);
		} catch(InputMismatchException ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		}
		
	}
	
	public String generateSubjectLine(String topic) {
		try {
		String prompt = "Generate a proper and professional subject lines for this " + topic;
		return geminiService.generate(prompt);
		} catch(InputMismatchException ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		}
	}
}
