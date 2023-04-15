package s710m.noCountry.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceProviderDetailDto {
    private Long idUser;
    private String email;
    private String fullName;
    private String country;
    private String kmAround;
    private String experienceYears;
    private String profileDescription;
    private Double score;
    private List<ServiceCategoryResponseDto> categories;
    private String profilePhoto;
    private List<String> galleryPhotos;
    private List<ReviewResponseProfileDto> reviews;
}
