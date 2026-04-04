package com.futureinvo.marketingtoolshub.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class UTMRequest {

	@NotBlank(message = "url must be entered")
	private String url;
	@NotBlank(message = "source must be entered")
	private String source;
	@NotBlank(message = "medium must be entered")
	private String medium;
	@NotBlank(message = "campaign must be entered")
	private String campaign;
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getMedium() {
		return medium;
	}
	public void setMedium(String medium) {
		this.medium = medium;
	}
	public String getCampaign() {
		return campaign;
	}
	public void setCampaign(String campaign) {
		this.campaign = campaign;
	}
	
	
}
