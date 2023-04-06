package s710m.noCountry.server.controller;


import org.springframework.http.HttpStatus;
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

    ////End point para obtener todos los turnos GET= "/turnos/"
    @GetMapping
    public ResponseEntity<List<Appointment>> getAll() {
        List<Appointment>listAppoitment= service.getAllAppointments();
        return new ResponseEntity<>(listAppoitment, HttpStatus.OK);
    }




    ////End point para actualizar todos los turnos PUT= "/turnos/"
    @PutMapping
    public ResponseEntity<Appointment> update(@RequestBody Appointment appointment) {
        return service.updateAppointment(appointment);
    }


    ////End point para guardar  turnos POST= "/turnos/"
    @PostMapping
    public ResponseEntity<Appointment> save(@RequestBody Appointment appointment) throws Exception {
        Appointment   appointmentCreated= service.saveAppointment(appointment);
        return new ResponseEntity<>(appointmentCreated, HttpStatus.CREATED);
    }


    ////End point para eliminar por id todos los turnos DELETE= "/turnos/3"
    @DeleteMapping("{appointmentId}")
    public void delete(@PathVariable("appointmentId") Long appointmentId) {
        service.deleteAppointment(appointmentId);
    }


    ////End point para obtener  POR ID todos los turnos GET= "/turnos/3"
    @GetMapping("{id}")
    public ResponseEntity<Optional<Appointment>> searchById(@PathVariable Long id) throws EntityNotFoundException {
        Optional<Appointment> appointment= service.searchById(id);
        return new ResponseEntity<>(appointment,HttpStatus.OK);
    }


}
