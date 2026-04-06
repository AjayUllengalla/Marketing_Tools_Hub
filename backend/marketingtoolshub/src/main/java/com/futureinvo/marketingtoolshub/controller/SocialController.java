package com.futureinvo.marketingtoolshub.controller;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.futureinvo.marketingtoolshub.dto.DescriptionRequest;
import com.futureinvo.marketingtoolshub.dto.HashtagRequest;

import com.futureinvo.marketingtoolshub.service.SocialService;

@RestController
@RequestMapping("/api/social")
public class SocialController {

	private final SocialService social;

	 public SocialController(SocialService social) {
	        this.social = social;
	    }
	@PostMapping("/hashtags") // endpoint to generate hashtags
	public ResponseEntity<String> generateHashTags(@RequestBody HashtagRequest req)  { // method to generate hashtags
		
		return ResponseEntity.ok(social.generateHashTags(req.getKeyword())); // response	
	}
		 
	
	// This method takes a DescriptionRequest object as input, validates it, and returns a ResponseEntity containing the generated description or an error message if the input is invalid.
	@PostMapping("/description")
	public ResponseEntity<String> generateDescription(@RequestBody DescriptionRequest descriptionReq){
		
		return ResponseEntity.ok(social.generateDescription(descriptionReq.getDescription()));
	}
}
