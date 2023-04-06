package s710m.noCountry.server.mapper;

import org.springframework.stereotype.Component;
import s710m.noCountry.server.model.ServiceProvider;
import s710m.noCountry.server.model.dto.ServiceProviderDto;

@Component
public class ServiceProviderMapper {

    public ServiceProviderDto toDto(ServiceProvider serviceProvider){
        ServiceProviderDto dto = new ServiceProviderDto();
        dto.setIdUser(serviceProvider.getUser().getId());
        dto.setEmail(serviceProvider.getUser().getUsername());
        dto.setFullName(serviceProvider.getFullName());
        dto.setCountry(serviceProvider.getCountry());
        dto.setExperienceYears(serviceProvider.getExperienceYears());
        return dto;
    }

}
