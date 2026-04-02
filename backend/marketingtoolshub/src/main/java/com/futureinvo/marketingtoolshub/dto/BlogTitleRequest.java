package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.Valid;
import lombok.Data;

@Data
public class BlogTitleRequest {

	@Valid
	private String topic;

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}
	
}
