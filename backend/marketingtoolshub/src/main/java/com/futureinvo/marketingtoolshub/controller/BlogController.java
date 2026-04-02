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
	
	@PostMapping("/blog-title")
	public ResponseEntity<String> blogTitleGenerator(@RequestBody @Valid BlogTitleRequest topic) {
		return ResponseEntity.ok(blogService.generateBlogTitle(topic.getTopic()));
	}
	
	@PostMapping("/blog")
	public ResponseEntity<String> blogGenerator(@RequestBody @Valid BlogRequest topic) {
		if(topic.getBlog() == null || topic.getBlog().isBlank() || topic.getBlog().length() <=0 ) {
			return ResponseEntity.badRequest().body("topic or related keyword must enter");
		}
		return ResponseEntity.ok(blogService.generateBlog(topic.getBlog()));
	}

}
