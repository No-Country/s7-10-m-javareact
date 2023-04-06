package s710m.noCountry.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceProviderDto {
    private Long idUser;
    private String email;
    private String fullName;
    private String country;
    private String experienceYears;
}
