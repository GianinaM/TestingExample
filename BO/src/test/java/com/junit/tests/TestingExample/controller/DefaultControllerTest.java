package com.junit.tests.TestingExample.controller;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.HashMap;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.junit.tests.TestingExample.service.DefaultService;

@WebMvcTest(DefaultController.class)
public class DefaultControllerTest {
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private DefaultService defaultService;

	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Test
	public void testingIndex() throws Exception {
		this.mockMvc
			.perform(get("/"))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(content().string("Welcome to the page"));
	}
	
	@Test
	public void testingSquaring() throws Exception {
		when(defaultService.square(4)).thenReturn(16);
		this.mockMvc
			.perform(get("/square/4"))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(content().string(containsString("16")));
	}
	
	@Test
	public void testJson() throws Exception{
		this.mockMvc
			.perform(get("/json").accept(MediaType.APPLICATION_JSON))
			.andDo(print())
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.root").exists())
			.andExpect(jsonPath("$..id").exists());
	}

	@Test
	public void testCaesarPost() throws Exception{

		HashMap<String, String> params = new HashMap<String, String>();
		params.put("cipher", "4");
		params.put("text", "abcd");

    when(defaultService.caesarString(params.get("text").toString(),
                                    Integer.parseInt(params.get("cipher")))
        ).thenReturn("efgh");

		this.mockMvc
			.perform(post("/caesar")
				.content(asJsonString(params))
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content().string(containsString("efgh")));
	}
}
