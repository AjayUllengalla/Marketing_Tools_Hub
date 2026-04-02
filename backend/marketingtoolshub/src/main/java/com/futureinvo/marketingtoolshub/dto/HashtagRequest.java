package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class HashtagRequest {

	@NotBlank
	private String keyword;
	
	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
}
