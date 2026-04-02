package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.Valid;
import lombok.Data;

@Data
public class BlogRequest {

	@Valid
	private String blog;

	public String getBlog() {
		return blog;
	}

	public void setBlog(String blog) {
		this.blog = blog;
	}
}
