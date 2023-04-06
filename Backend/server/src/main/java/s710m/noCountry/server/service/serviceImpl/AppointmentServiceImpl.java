package s710m.noCountry.server.service.serviceImpl;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import s710m.noCountry.server.configException.EntityFoundException;
import s710m.noCountry.server.model.Appointment;
import s710m.noCountry.server.repository.AppointmentRepository;
import s710m.noCountry.server.service.AppointmentService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private  final AppointmentRepository repository;

    public AppointmentServiceImpl(AppointmentRepository repository) {
        this.repository = repository;
    }


    @Override
    public Appointment saveAppointment(Appointment appointment) throws Exception {
        Appointment turnoLocal= repository.findByFecha(LocalDateTime.parse(appointment.getFecha().toString()));
        if(turnoLocal != null){
            System.out.println("El turno ya existe");
            throw new EntityFoundException();
        }
        else {
            turnoLocal=repository.save(appointment);
        }

        return turnoLocal;
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        repository.deleteById(appointmentId);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    @Override
    public ResponseEntity<Appointment> updateAppointment(Appointment appointment) {
        Appointment appointment1= repository.save(appointment);
        return new ResponseEntity<Appointment>(appointment1, HttpStatus.OK);
    }

    @Override
    public Optional<Appointment> searchById(Long id) {
        Optional<Appointment> turno = repository.findById(id);
        if (!turno.isPresent()) {
            String mensaje= "El turno cod id= "+ id.toString()+" no existe (searchById)";
            System.out.println(mensaje);
        }
        return turno;
    }
}
//primero debo crear cliente - prestador - turno
