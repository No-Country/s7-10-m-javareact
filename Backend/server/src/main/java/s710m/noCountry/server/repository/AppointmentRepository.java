package s710m.noCountry.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import s710m.noCountry.server.model.Appointment;

import java.util.Date;

public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
    Appointment findByFecha(Date turno);
}
