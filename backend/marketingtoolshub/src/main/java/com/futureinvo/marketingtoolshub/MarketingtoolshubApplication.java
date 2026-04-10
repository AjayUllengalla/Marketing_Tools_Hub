package com.futureinvo.marketingtoolshub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class MarketingtoolshubApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure()
                .directory("./")
                .ignoreIfMissing()
                .load();

        String key = dotenv.get("GEMINI_API_KEY");
        System.setProperty("GEMINI_API_KEY", key);
        
		SpringApplication.run(MarketingtoolshubApplication.class, args);
		System.out.println("Marketing Tools Hub Workinng");
	}

}
