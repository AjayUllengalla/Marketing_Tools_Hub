package com.futureinvo.marketingtoolshub.service;

import java.util.InputMismatchException;

import org.springframework.stereotype.Service;

import com.futureinvo.marketingtoolshub.dto.UTMRequest;
import com.futureinvo.marketingtoolshub.exception.CustomException;

@Service
public class UTMService {
	
	public String buildUTM(UTMRequest req) {
		try {
		StringBuilder url = new StringBuilder(req.getUrl());
		if(req.getUrl().contains("?")) { // checking if url already has query parameters
			url.append("&"); // if url already has query parameters, append & before adding utm parameters
		} else {
			url.append("?");
		}
		url.append("utm_source=").append(req.getSource()); // appending source, medium and campaign to the url
		url.append("&urm_medium=").append(req.getMedium()); // appending source, medium and campaign to the url
		url.append("&utm_campaign=").append(req.getCampaign()); // appending source, medium and campaign to the url
		
		return url.toString();
	} catch(InputMismatchException ex) {
		throw new CustomException("Enter Valid details");
	} catch(NullPointerException ex) {
		throw new CustomException("Required fields should not be blank");
	}
		
	}

}
