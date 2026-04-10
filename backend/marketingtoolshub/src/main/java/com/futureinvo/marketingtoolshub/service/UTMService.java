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
		if(req.getUrl().contains("?")) {
			url.append("&");
		} else {
			url.append("?");
		}
		url.append("utm_source=").append(req.getSource());
		url.append("&urm_medium=").append(req.getMedium());
		url.append("&utm_campaign=").append(req.getCampaign());
		
		return url.toString();
	} catch(InputMismatchException ex) {
		throw new CustomException("Enter Valid details");
	} catch(NullPointerException ex) {
		throw new CustomException("Required fields should not be blank");
	}
		
	}

}
