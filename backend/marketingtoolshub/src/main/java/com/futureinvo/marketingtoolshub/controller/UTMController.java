package com.futureinvo.marketingtoolshub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.futureinvo.marketingtoolshub.dto.UTMRequest;
import com.futureinvo.marketingtoolshub.service.UTMService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/campaign")
public class UTMController {
	
	@Autowired
	private UTMService service;
	
	@PostMapping("/utm")
	public ResponseEntity<String> generateUTM(@RequestBody @Valid UTMRequest req) {
		
		return ResponseEntity.ok().body(service.buildUTM(req));
	}

}
