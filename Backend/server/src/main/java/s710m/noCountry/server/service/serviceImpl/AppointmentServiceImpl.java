package s710m.noCountry.server.service.serviceImpl;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import s710m.noCountry.server.model.Appointment;
import s710m.noCountry.server.repository.AppointmentRepository;
import s710m.noCountry.server.service.AppointmentService;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private  final AppointmentRepository repository;

    public AppointmentServiceImpl(AppointmentRepository repository) {
        this.repository = repository;
    }


}
//primero debo crear cliente - prestador - turno
