package s710m.noCountry.server.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import s710m.noCountry.server.model.Appointment;
import s710m.noCountry.server.service.AppointmentService;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointment/")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

}
