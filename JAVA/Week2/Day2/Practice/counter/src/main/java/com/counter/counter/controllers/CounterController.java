package com.counter.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CounterController {
    private int counter = 0;

    @GetMapping("/counter")
    public String getCounter(Model model) {
        model.addAttribute("counter", counter);
        return "counter.jsp";
    }

    @GetMapping("/increment")
    public String incrementCounter() {
        counter++;
        return "redirect:counter";
    }

    @GetMapping("/incrementByTwo")
    public String incrementByTwo() {
        counter += 2;
        return "redirect:counter";
    }

    @GetMapping("/reset")
    public String resetCounter() {
        counter = 0;
        return "redirect:counter";
    }
}
