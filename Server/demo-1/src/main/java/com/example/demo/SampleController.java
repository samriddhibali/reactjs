package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller vs RestController
@RestController
@RequestMapping("/home")
public class SampleController {

	@GetMapping("/greeting/")
	public List<Greeting> greeting() {
		List<Greeting> list = new ArrayList<Greeting>();
		list.add(new Greeting(1, "Hello"));
		list.add(new Greeting(2, "Hi"));
		return list;
	}

}