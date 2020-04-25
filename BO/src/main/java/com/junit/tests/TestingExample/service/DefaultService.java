package com.junit.tests.TestingExample.service;

import org.springframework.stereotype.Service;

@Service
public class DefaultService {

	public static final int alphaSize = 26;

	public Integer square(int i) {
		return i*i;
	}

	public String caesarString(String text, Integer shift) {

		String result = "";
		int addCase = 0;

		for (char ch: text.toCharArray()) {
			if (Character.isUpperCase(ch)) {
				addCase = (int)'A';
			} else {
				addCase = (int)'a';
			}
			result += (char) (((int) ch + shift - addCase + alphaSize ) % alphaSize + addCase);
		}

		return result;
	}

	public String decryptCaesarString(String text, Integer shift) {

		String result = "";
		int alpha = 0;

		if (shift == null) {
			shift = 0;
		}

		for (char ch: text.toCharArray()) {
			if (Character.isUpperCase(ch)) {
				alpha = (int)'A';
			} else {
				alpha = (int)'a';
			}
			result += (char) ((((int) ch - shift - alpha + alphaSize) % alphaSize + alpha));
		}
		return result;
	}

}
