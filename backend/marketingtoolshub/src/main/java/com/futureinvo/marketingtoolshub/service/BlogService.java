package com.futureinvo.marketingtoolshub.service;

import java.util.InputMismatchException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class BlogService {

	@Autowired
	private GeminiService geminiService;

	public String generateBlogTitle(String topic) {
		try {
			String prompt = "Act as an SEO Content Strategist. For the topic: '" + topic +
					"', generate 3 high-CTR, SEO-optimized blog titles and a comprehensive content outline. " +
					"The outline must include: 1. A catchy H1, 2. Logical H2 and H3 subheadings that answer 'People Also Ask' queries, "
					+
					"and 3. A 'Key Takeaways' summary section. " +
					"Ensure the titles are under 60 characters and include the primary keyword: '" + topic + "'.";
			return geminiService.generate(prompt);
		} catch (InputMismatchException e) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating blog title: " + e.getMessage());
		}

	}

	public String generateBlog(String topic) {

		if (topic.length() < 3) {
			throw new CustomException("Enter must 4 or more characters for blog ");
		}
		try {
			String prompt = "Act as a Professional Content Writer. Generate a comprehensive, clean, and SEO-friendly blog post for the topic: '"
					+ topic + "'. " +"The blog must include: 1. An engaging introduction with a clear hook, 2. Well-structured body sections using H2 and H3 subheadings, "
					+
					"3. Bulleted lists for readability, 4. A 'Deep Dive' section for expert insights, and 5. A compelling conclusion with a Call to Action. "
					+
					"Maintain a [Professional/Conversational] tone, avoid fluff, and ensure a high 'Perplexity' and 'Burstiness' score for human-like flow.";
			return geminiService.generate(prompt);
		}  catch (InputMismatchException e) {
			throw new CustomException("Must Enter valid keywords or characters");
		} catch (Exception e) {
			throw new CustomException("Error while generating blog: " + e.getMessage());
		}
	}
}
