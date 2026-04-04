package com.futureinvo.marketingtoolshub.service;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.dto.UTMRequest;

@Service
public class UTMService {
	
	public String buildUTM(UTMRequest req) {
		
		StringBuilder url = new StringBuilder(req.getUrl());
		if(req.getUrl().contains("?")) {
			url.append("&");
		} else {
			url.append("?");
		}
		url.append("utm_source=").append(req.getSource());
		url.append("&urm_medium=").append(req.getMedium());
		url.append("&utm_campaign=").append(req.getCampaign());
		
		return url.toString();
		
	}

}
