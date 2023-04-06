package s710m.noCountry.server.service;

import s710m.noCountry.server.model.ServiceCategory;
import s710m.noCountry.server.model.dto.ServiceCategoryDto;

import java.util.List;

public interface ServiceCategoryService {

    List<ServiceCategoryDto> getAllServiceCategories();
}
