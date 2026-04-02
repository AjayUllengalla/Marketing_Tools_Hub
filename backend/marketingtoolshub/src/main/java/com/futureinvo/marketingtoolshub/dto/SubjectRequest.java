package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.Valid;
import lombok.Data;

@Data
public class SubjectRequest {

	@Valid
	private String subjectLine;

	public String getSubjectLine() {
		return subjectLine;
	}

	public void setSubjectLine(String subjectLine) {
		this.subjectLine = subjectLine;
	}
	
}
