package com.junit.tests.TestingExample.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.junit.tests.TestingExample.service.DefaultService;

@Controller
@CrossOrigin( 
	allowCredentials = "true", 
	origins = "*",
	allowedHeaders = "*",
	methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/")
public class DefaultController {
	@Autowired
	DefaultService defaultService;
	
	@RequestMapping("")
	public @ResponseBody String greeting() {
		return "Welcome to the page";
	}
	
	@RequestMapping("square/{n}")
	public @ResponseBody String square(@PathVariable("n") Integer n) {
		return defaultService.square(n).toString();
	}
	
	@RequestMapping("json")
	public @ResponseBody Map<String, Map<String, Map<String, Integer>>> jsonTest(){
		Map<String, Map<String, Map<String, Integer>>> ret = new HashMap<>();
		Map<String, Integer> aMap = new HashMap<>();
		aMap.put("id", 1);
		Map<String, Map<String, Integer>> bMap = new HashMap<>();
		bMap.put("new key", aMap);
		ret.put("root", bMap);
		
		return ret;
	}

	// @RequestMapping(value = "caesar", method = RequestMethod.POST)
	@PostMapping("caesar")
	public @ResponseBody String caesar(@RequestBody Map<String, Object> params) {
		return defaultService.caesarString(params.get("text").toString(), Integer.parseInt((String) params.get("cipher"))).toString();
	}

	@PostMapping("decrypt-caesar")
	public @ResponseBody String decryptCaesar(@RequestBody Map<String, Object> params) {
		return defaultService.decryptCaesarString(params.get("cipherText").toString(), Integer.parseInt((String) params.get("shift"))).toString();
	}
}
