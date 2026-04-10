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
			String prompt = "Act as a Corporate Communications Expert. Generate a professional email template for the topic: '"
					+ topic + "'. " +
					"The output must include: 1. Three distinct Subject Line options (Urgent, Formal, and Catchy), 2.A personalized salutation,"
					+
					"3. A concise opening that establishes context, 4. A clear, bulleted 'Ask' or 'Value Proposition', "
					+
					"and 5. A professional sign-off with placeholders for [Your Name] and [Your Title]. " +
					"Tone: Maintain a balance of professional, courteous, and direct. Avoid passive-aggressive phrasing or excessive fluff.";
			return geminiService.generate(prompt);
		} catch (InputMismatchException ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating email: " + e.getMessage());
		}

	}

	public String generateSubjectLine(String topic) {
		try {
			String prompt = "Act as an Email Marketing & Communications Specialist. Generate 5 distinct, professional subject lines for: '"
					+ topic + "'. " +
					"Provide options for the following categories: 1. Formal/Direct, 2. Collaborative/Action-Oriented, 3. Urgent/Time-Sensitive, 4. Curiosity/Hook, and 5. Follow-up. "
					+
					"Constraints: Keep each under 60 characters, use #NoSpam keywords (avoid 'Free', 'Win', or all caps), and naturally include the primary topic: '"
					+ topic + "'.";
			return geminiService.generate(prompt);
		} catch (InputMismatchException ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating subject line: " + e.getMessage());
		}
	}
}
