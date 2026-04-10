package com.futureinvo.marketingtoolshub.service;

import java.util.InputMismatchException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class SocialService {

	@Autowired
	private GeminiService gemini;

	public String generateHashTags(String keyword) { // method to generate hashtags

		if (keyword == null || keyword.isBlank()) {
			throw new CustomException("Must enter topic or related keyword"); // validation for empty keyword
		} else if (keyword.length() < 4) {
			throw new CustomException("Keyword must have atleast 4 characters"); // validation for keyword length
		}

		try {
			String prompt = "Act as a Social SEO Expert. Generate 10 SEO-optimized hashtags for: " + keyword +
					". Categorize them into: 3 Broad Industry tags, 4 Niche/Search-intent tags, 2 Community tags, and 1 Branded/Campaign tag. "
					+
					"Ensure they use #CamelCase for accessibility and prioritize keywords that users actually type into social search bars.";
			return gemini.generate(prompt);
		} catch(InputMismatchException	 ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating hashtags: " + e.getMessage());
		}
	}

	public String generateDescription(String description) {

		if (description == null || description.isBlank()) {
			throw new CustomException("Must enter a topic or related content"); // validation for empty description
		} else if (description.length() > 500) {
			throw new CustomException("Description must be less than 500 characters"); // validation for description
																						// length
		} else if (description.length() < 10) {
			throw new CustomException("Description must be at least 10 characters long"); // validation for description
																							// length
		}
		try {
			String prompt = "Act as a Social Media Strategist. Write a high-engagement, SEO-optimized caption for a [Post/Video/Reel] about: "
					+ description +
					". Structure the response with: 1. A 'Scroll-Stopping' hook, 2. A keyword-rich body paragraph (under 150 words), 3. A clear CTA, and 4. A 'Social SEO' summary of 3 primary keywords to include in the alt-text. "
					+
					"Use an engaging but authentic tone and naturally integrate the keyword: '";
			return gemini.generate(prompt);
		} catch(InputMismatchException ex) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating description or caption: " + e.getMessage());
		}
	}

}
