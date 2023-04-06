package s710m.noCountry.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import s710m.noCountry.server.model.ServiceCategory;
import s710m.noCountry.server.model.dto.ServiceCategoryDto;
import s710m.noCountry.server.service.ServiceCategoryService;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("service-categories")
public class ServiceCategoryController {

    private final ServiceCategoryService service;

    @GetMapping
    public ResponseEntity<List<ServiceCategoryDto>> getAllServiceCategory(){
        return ResponseEntity.status(OK).body(service.getAllServiceCategories());
    }

}
