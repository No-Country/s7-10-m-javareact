package s710m.noCountry.server.service;

import org.springframework.http.ResponseEntity;
import s710m.noCountry.server.model.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmentService {


    public Appointment saveAppointment(Appointment appointment) throws Exception;

    public void deleteAppointment(Long appointmentId);

    public List<Appointment> getAllAppointments();

    public ResponseEntity<Appointment> updateAppointment (Appointment appointment );

    public Optional<Appointment> searchById(Long id);



}
