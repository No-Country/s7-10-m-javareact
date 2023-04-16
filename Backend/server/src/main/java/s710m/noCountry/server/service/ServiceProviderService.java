package s710m.noCountry.server.service;

import s710m.noCountry.server.model.ServiceProvider;

import java.util.List;

public interface ServiceProviderService {

    ServiceProvider getById(Long id);
    List<ServiceProvider> getAllServiceProviders();
}
