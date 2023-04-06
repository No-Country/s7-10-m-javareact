package s710m.noCountry.server.mapper;

import org.springframework.stereotype.Component;
import s710m.noCountry.server.model.ServiceCategory;
import s710m.noCountry.server.model.dto.ServiceCategoryDto;

@Component
public class ServiceCategoryMapper {

    public ServiceCategoryDto toDto(ServiceCategory serviceCategory){
        ServiceCategoryDto dto = new ServiceCategoryDto();
        dto.setId(serviceCategory.getId());
        dto.setName(serviceCategory.getName().getName());
        return dto;
    }
}
