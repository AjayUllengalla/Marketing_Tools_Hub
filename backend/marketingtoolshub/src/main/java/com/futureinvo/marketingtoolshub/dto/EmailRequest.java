package com.futureinvo.marketingtoolshub.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EmailRequest {

	@NotBlank(message = "topic must be entered")
	private String topic;

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	
	
}
