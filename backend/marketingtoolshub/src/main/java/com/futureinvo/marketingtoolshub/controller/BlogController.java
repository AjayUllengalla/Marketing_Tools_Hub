package com.futureinvo.marketingtoolshub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.futureinvo.marketingtoolshub.dto.BlogRequest;
import com.futureinvo.marketingtoolshub.dto.BlogTitleRequest;
import com.futureinvo.marketingtoolshub.service.BlogService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/blog")
public class BlogController {
	@Autowired
	private BlogService blogService;
	
	// This method takes a BlogTitleRequest object as input, validates it, and returns a ResponseEntity containing the generated blog title or an error message if the input is invalid.
	@PostMapping("/blog-title") // Endpoint for generating blog titles
	public ResponseEntity<String> blogTitleGenerator(@RequestBody @Valid BlogTitleRequest topic) {
		if(topic.getTopic().length() < 0 || topic.getTopic() == null || topic.getTopic().isBlank() ) { // Check if the topic is null, blank, or has a length less than or equal to 0
			return ResponseEntity.badRequest().body("Topic must be entered");
		} else if(topic.getTopic().length() > 400) { // Check if the topic exceeds 400 characters
			return ResponseEntity.badRequest().body("Topic must be less than 400 characters");
		}
		return ResponseEntity.ok(blogService.generateBlogTitle(topic.getTopic()));
	}
	
	// This method takes a BlogRequest object as input, validates it, and returns a ResponseEntity containing the generated blog content or an error message if the input is invalid.
	@PostMapping("/blog")
	public ResponseEntity<String> blogGenerator(@RequestBody @Valid BlogRequest topic) {
		if(topic.getBlog() == null || topic.getBlog().isBlank() || topic.getBlog().length() <=0 ) {
			return ResponseEntity.badRequest().body("topic or related keyword must enter");
		} else if(topic.getBlog().length() > 400) {
			return ResponseEntity.badRequest().body("topic must be less than 400 characters");
		}
		return ResponseEntity.ok(blogService.generateBlog(topic.getBlog()));
	}

}
