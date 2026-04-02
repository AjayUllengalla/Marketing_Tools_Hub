package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.Valid;
import lombok.Data;

@Data
public class DescriptionRequest {

	@Valid
	private String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
}
