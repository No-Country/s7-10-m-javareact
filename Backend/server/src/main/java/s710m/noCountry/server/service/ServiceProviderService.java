package s710m.noCountry.server.service;

import s710m.noCountry.server.model.ServiceProvider;
import s710m.noCountry.server.model.dto.ServiceProviderDetailDto;

import java.util.List;

public interface ServiceProviderService {

    ServiceProvider getById(Long id);
    ServiceProviderDetailDto getDetails(Long id);
    List<ServiceProvider> getAllServiceProviders();
}
