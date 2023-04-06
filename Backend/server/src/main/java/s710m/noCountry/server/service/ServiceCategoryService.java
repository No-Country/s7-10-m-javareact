package s710m.noCountry.server.service;

import s710m.noCountry.server.model.ServiceCategory;
import s710m.noCountry.server.model.dto.ServiceCategoryDto;
import s710m.noCountry.server.model.dto.ServiceProviderDto;

import java.util.List;

public interface ServiceCategoryService {

    List<ServiceCategoryDto> getAllServiceCategories();
    List<ServiceProviderDto> getAllServiceProvidersByCategory(Long id);
    ServiceCategory getById(Long id);
}
