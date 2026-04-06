package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BlogRequest {

	@NotBlank(message = "Blog content cannot be null or empty")
	private String blog;

	public String getBlog() {
		return blog;
	}

	public void setBlog(String blog) {
		this.blog = blog;
	}
}
