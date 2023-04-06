package s710m.noCountry.server.service.serviceImpl;

import org.springframework.stereotype.Service;
import s710m.noCountry.server.configException.EntityFoundException;
import s710m.noCountry.server.configException.EntityNotFoundException;
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
        Appointment appointmentLocal= repository.findByDate(LocalDateTime.parse(appointment.getDate().toString()));
        if(appointmentLocal != null){
            System.out.println("This date and time are reserved");
            throw new EntityFoundException("This date and time are reserved");
        }
        else {
            appointmentLocal=repository.save(appointment);
        }
        return appointmentLocal;
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        searchById(appointmentId);
        repository.deleteById(appointmentId);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return repository.findAll();
    }

    @Override
    public Appointment updateAppointment(Long id, Appointment appointment) {
        searchById(id).get();
        Appointment appointment1= repository.save(appointment);
        return appointment1;
    }

    @Override
    public Optional<Appointment> searchById(Long id) {
        Optional<Appointment> appointment = repository.findById(id);
        if (!appointment.isPresent()) {
            String message= "This appointment with id "+ id.toString()+" does not exists";
            System.out.println(message);
            throw new EntityNotFoundException(message);
        }
        return appointment;
    }
}
//primero debo crear cliente - prestador - turno
