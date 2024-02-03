package com.omikuji.omikujiform.Controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping("/omikuji")
public class OmikujiController {

    @GetMapping
    public String showOmikujiForm() {
        return "omikujiForm.jsp";
    }

    @PostMapping("/process")
    public String processOmikujiForm(
            String number, String city, String person,
            String endeavor, String livingThing, String niceMessage,
            HttpSession session) {
        // Save the form inputs to session
        session.setAttribute("number", number);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("endeavor", endeavor);
        session.setAttribute("livingThing", livingThing);
        session.setAttribute("niceMessage", niceMessage);

        return "redirect:/omikuji/show";
    }

    @GetMapping("/show")
    public String showFortune(Model model, HttpSession session) {
        // Retrieve the saved values from session
        String number = (String) session.getAttribute("number");
        String city = (String) session.getAttribute("city");
        String person = (String) session.getAttribute("person");
        String endeavor = (String) session.getAttribute("endeavor");
        String livingThing = (String) session.getAttribute("livingThing");
        String niceMessage = (String) session.getAttribute("niceMessage");

        // Pass the values to the template
        model.addAttribute("number", number);
        model.addAttribute("city", city);
        model.addAttribute("person", person);
        model.addAttribute("endeavor", endeavor);
        model.addAttribute("livingThing", livingThing);
        model.addAttribute("niceMessage", niceMessage);

        return "showFortune.jsp";
    }
}
