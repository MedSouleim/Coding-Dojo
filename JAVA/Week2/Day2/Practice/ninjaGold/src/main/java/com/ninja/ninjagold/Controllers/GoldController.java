package com.ninja.ninjagold.Controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.Random;

@Controller
public class GoldController {

    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
        if (session.getAttribute("gold") == null) {
            session.setAttribute("gold", 0);
        }
        if (session.getAttribute("activityLog") == null) {
            session.setAttribute("activityLog", "");
        }

        model.addAttribute("gold", session.getAttribute("gold"));
        model.addAttribute("activityLog", session.getAttribute("activityLog"));

        return "index.jsp";
    }

    @PostMapping("/process_money")
    public String processMoney(String location, HttpSession session, Model model) {
        int goldEarned = 0;
        Random random = new Random();

        switch (location) {
            case "farm":
                goldEarned = random.nextInt(11) + 10;
                break;
            case "cave":
                goldEarned = random.nextInt(6) + 5;
                break;
            case "house":
                goldEarned = random.nextInt(4) + 2;
                break;
            case "quest":
                goldEarned = random.nextInt(101) - 50;
                break;
            case "spa":
                goldEarned = random.nextInt(16) - 5;
                break;
        }

        int currentGold = (int) session.getAttribute("gold");
        session.setAttribute("gold", currentGold + goldEarned);

        // Update the model with the new gold value
        model.addAttribute("gold", session.getAttribute("gold"));

        String activityLog = (String) session.getAttribute("activityLog");
        LocalDateTime timestamp = LocalDateTime.now();
        activityLog += String.format("Ninja went to %s and %s %d gold. (%s)%n",
                location, (goldEarned >= 0 ? "gained" : "lost"), Math.abs(goldEarned), timestamp);
        session.setAttribute("activityLog", activityLog);

        return "redirect:/";
    }

    @PostMapping("/reset")
    public String reset(HttpSession session) {
        session.setAttribute("gold", 0);
        session.setAttribute("activityLog", "");
        return "redirect:/";
    }
}
