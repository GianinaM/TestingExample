package com.junit.tests.TestingExample.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DefaultServiceTests {
	@Autowired
	DefaultService defaultService;
	
	@Test
	public void smokeTesting() {
		assertNotNull(defaultService);
	}
	
	@Test
	public void defaultSquare() {
		assertEquals(defaultService.square(1), 1);
	}
	@Test
	public void normalSquare() {
		assertEquals(defaultService.square(13), 169);
	}

	
	@Test
	public void caesarStringZeroCipher() {
		assertEquals("a", defaultService.caesarString("a", 0));
	}

	@Test
	public void caesarStringWithNumberCipher() {
		assertEquals("d", defaultService.caesarString("a", 3));
	}

	@Test
	public void caesarStringFullTextCipher() {
		assertEquals("cdefg", defaultService.caesarString("abcde", 2));
	}
	
	@Test
	public void caesarStringOverflowCipher() {
		assertEquals("d", defaultService.caesarString("z", 4));
	}

	@Test
	public void caesarStringCapitalizeCipher() {
		assertEquals("eF", defaultService.caesarString("aB", 4));
	}

	@Test
	public void decryptCaesarForNoText(){
		assertEquals("", defaultService.decryptCaesarString("", 23), "Should return nothing");
	}

	@Test
	public void decryptCaesarForNoShift(){
		assertEquals("a", defaultService.decryptCaesarString("a", 0), "Should be the same as input, no ecryption founded");
	}

	@Test
	public void decryptCaesarForOneCharacterWithShift(){
		assertEquals("a", defaultService.decryptCaesarString("d", 3), "*d* shifted with 3 is *a*");
	}

	@Test
	public void decryptCaesarForOverflowCharacter(){
		assertEquals("w", defaultService.decryptCaesarString("a", 4), "*a* shifted with 4 is *w*");
	}
	
	@Test
	public void decryptCaesarForUpperCaseCharacter(){
		assertEquals("W", defaultService.decryptCaesarString("A", 4), "*A* shifted with 4 is *W*");
	}

	@Test
	public void decryptCaesarForAnLongText(){
		assertEquals("abcd", defaultService.decryptCaesarString("xyza", 23));
	}
}
