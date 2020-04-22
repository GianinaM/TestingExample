package com.junit.tests.TestingExample.service;

import org.springframework.stereotype.Service;

@Service
public class DefaultService {

	public Integer square(int i) {
		return i*i;
	}

	public String caesarString(String text, Integer cipher) {

		String result = "";
		int addCase = 0;

		for (char ch: text.toCharArray()) {
			if (Character.isUpperCase(ch)) {
				addCase = (int)'A';
			} else {
				addCase = (int)'a';
			}
			result += (char) (((int) ch + cipher - addCase) % 26 + addCase);
		}

		return result;
	}

}
