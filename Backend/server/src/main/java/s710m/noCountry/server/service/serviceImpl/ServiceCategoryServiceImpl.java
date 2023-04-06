package s710m.noCountry.server.service.serviceImpl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import s710m.noCountry.server.mapper.ServiceCategoryMapper;
import s710m.noCountry.server.model.dto.ServiceCategoryDto;
import s710m.noCountry.server.repository.ServiceCategoryRepository;
import s710m.noCountry.server.service.ServiceCategoryService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ServiceCategoryServiceImpl implements ServiceCategoryService {

    private final ServiceCategoryRepository repository;
    private final ServiceCategoryMapper mapper;


    @Override
    public List<ServiceCategoryDto> getAllServiceCategories() {
        return repository.findAll()
                .stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }
}
