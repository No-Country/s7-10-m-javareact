package s710m.noCountry.server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "service_providers")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceProvider {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "country")
    private String country;

    @ManyToMany(mappedBy = "serviceProviders")
    @JsonIgnoreProperties("serviceProviders")
    private List<Category> categories = new ArrayList<>();

    @Column(name = "experience_years")
    private String experienceYears;

    @Column(name = "km_around")
    private String kmAround;

    @Column(name = "service_description")
    private String serviceDescription;

    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties("serviceProvider")
    private User user;

    /*@OneToMany(mappedBy = "serviceProvider")
    @JsonIgnoreProperties("serviceProvider")
    private Appointment appointment;*/
}
