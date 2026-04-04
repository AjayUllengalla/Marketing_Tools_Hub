package com.futureinvo.marketingtoolshub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.futureinvo.marketingtoolshub.dto.EmailRequest;
import com.futureinvo.marketingtoolshub.dto.SubjectRequest;
import com.futureinvo.marketingtoolshub.service.EmailService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/email")
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@PostMapping("/email-template")
	public ResponseEntity<String> generateEmail(@RequestBody @Valid EmailRequest topic) {
		if(topic.getTopic().length() < 0 || topic.getTopic() == null || topic.getTopic().isBlank()) {
			return ResponseEntity.badRequest().body("Must enter topic or related keyword");
		}
		return ResponseEntity.ok(emailService.generateEmail(topic.getTopic()));
	}
	
	@PostMapping("/subjectline")
	public ResponseEntity<String> generateSubjectLine(@RequestBody @Valid SubjectRequest subject) {
		if(subject.getSubjectLine().length() < 0 || subject.getSubjectLine() == null || subject.getSubjectLine().isBlank()) {
			return ResponseEntity.badRequest().body("Must enter topic or related keyword to get Subjecct line for email");
		} 
		return ResponseEntity.ok(emailService.generateSubjectLine(subject.getSubjectLine()));
	}
}
