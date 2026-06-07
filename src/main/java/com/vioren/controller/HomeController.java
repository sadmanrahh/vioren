package com.vioren.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // loads templates/index.html
    }

    @GetMapping("/services")
    public String services() {
        return "services"; // templates/services.html
    }

    @GetMapping("/about")
    public String about() {
        return "about"; // templates/about.html
    }

    @GetMapping("/privacy")
    public String privacy() {
        return "privacy"; // templates/privacy.html
    }

    @GetMapping("/terms")
    public String terms() {
        return "terms"; // templates/terms.html
    }
}