package s710m.noCountry.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import s710m.noCountry.server.model.ServiceProvider;
import s710m.noCountry.server.model.dto.ServiceProviderDetailDto;
import s710m.noCountry.server.service.ServiceProviderService;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/service-provider")
@RequiredArgsConstructor
public class ServiceProviderController {

    private final ServiceProviderService service;

    @GetMapping()
    public ResponseEntity<List<ServiceProvider>> getAllServiceProviders(){
        return ResponseEntity.status(OK).body(service.getAllServiceProviders());
    }

}
