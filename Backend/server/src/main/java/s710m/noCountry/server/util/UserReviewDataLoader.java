package s710m.noCountry.server.util;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import s710m.noCountry.server.model.dto.ReviewRequestDto;
import s710m.noCountry.server.service.ReviewService;

@Component
@RequiredArgsConstructor
public class UserReviewDataLoader implements CommandLineRunner {

    private final ReviewService service;

    @Override
    public void run(String... args) throws Exception {
        dataLoad();
    }

    private void dataLoad(){
        if(service.getAllReviews().isEmpty()){
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            1L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            1L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            2L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            2L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            3L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            2L,
                            3L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            4L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.0,
                            2L,
                            4L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            5L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            5L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            6L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            2L,
                            6L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            7L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            7L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            8L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            8L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            9L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            9L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            10L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            10L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            11L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.0,
                            2L,
                            11L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            12L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            2L,
                            12L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            13L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            13L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            14L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            14L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            15L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            15L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            16L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            16L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            17L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            2L,
                            17L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            18L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            18L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            19L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            19L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            20L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            20L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            21L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            2L,
                            21L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            22L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.0,
                            2L,
                            22L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            23L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            23L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            24L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            2L,
                            24L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            25L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            25L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            26L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            26L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            27L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            27L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            28L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            28L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            29L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.0,
                            2L,
                            29L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            1L,
                            30L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            2L,
                            30L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            31L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            31L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            1L,
                            32L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            32L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            33L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            2L,
                            33L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.0,
                            1L,
                            34L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            34L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            35L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            3.5,
                            2L,
                            35L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            5.0,
                            1L,
                            36L));
            service.addReview(
                    new ReviewRequestDto(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                                    "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar.",
                            4.5,
                            2L,
                            36L));

        }
    }
}
