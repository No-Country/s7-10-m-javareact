package s710m.noCountry.server.util;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import s710m.noCountry.server.model.Authority;
import s710m.noCountry.server.model.enums.NameAuthority;
import s710m.noCountry.server.repository.AuthorityRepository;
import s710m.noCountry.server.repository.ClientRepository;
import s710m.noCountry.server.repository.ServiceProviderRepository;
import s710m.noCountry.server.repository.UserRepository;
import s710m.noCountry.server.service.UserService;

@Component
@RequiredArgsConstructor
public class UserDataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final ClientRepository clientRepository;
    private final ServiceProviderRepository serviceProviderRepository;
    private final UserService service;
    private final PasswordEncoder encoder;
    @Override
    public void run(String... args) throws Exception {
        loadRoles();
        loadUserClient();
        loadUserServiceProvider();
    }

    private void loadRoles(){
        if(authorityRepository.findAll().isEmpty()){
            Authority client = new Authority(1L, NameAuthority.ROLE_CLIENT,"");
            Authority serviceProvider = new Authority(2L, NameAuthority.ROLE_SERVICE_PROVIDER,"");
            authorityRepository.save(client);
            authorityRepository.save(serviceProvider);
        }
    }

    @Transactional
    private void loadUserClient(){
        if(clientRepository.findAll().isEmpty()){
            service.dataClientLoad(
                    "Pedro Martinez",
                    "Argentina - Buenos Aires",
                    "usertestclient1@ht.cuak",
                    encoder.encode("1234"));
            service.dataClientLoad(
                    "Martina Wer",
                    "Argentina - Misiones",
                    "usertestclient2@ht.cuak",
                    encoder.encode("1234"));
        }
    }

    @Transactional
    private void loadUserServiceProvider(){
        if(serviceProviderRepository.findAll().isEmpty()){
            service.dataServiceProviderLoad(
                    "Russell Cross",
                    "Argentina - Buenos Aires",
                    "3",
                    "23",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    1L,
                    "usertest1@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Eleanor Cummings",
                    "Argentina - Misiones",
                    "1",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    1L,
                    "usertest2@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Michael Raymond",
                    "Argentina - Córdoba",
                    "6",
                    "20",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    2L,
                    "usertest3@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Morgan Gibson",
                    "Argentina - Mendoza",
                    "1",
                    "10",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    2L,
                    "usertest4@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Simon Hill",
                    "Argentina - Corrientes",
                    "6",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    3L,
                    "usertest5@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Aurelia Flowers",
                    "Argentina - Buenos Aires",
                    "2",
                    "30",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    3L,
                    "usertest6@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Laurel Moody",
                    "Argentina - Misiones",
                    "4",
                    "45",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    4L,
                    "usertest7@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Benedict Pratt",
                    "Argentina - San Juan",
                    "2",
                    "15",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    4L,
                    "usertest8@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Russell Cross",
                    "Argentina - Buenos Aires",
                    "3",
                    "23",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    5L,
                    "usertest1@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Eleanor Cummings",
                    "Argentina - Misiones",
                    "1",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    5L,
                    "usertest2@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Michael Raymond",
                    "Argentina - Córdoba",
                    "6",
                    "20",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    6L,
                    "usertest3@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Morgan Gibson",
                    "Argentina - Mendoza",
                    "1",
                    "10",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    6L,
                    "usertest4@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Simon Hill",
                    "Argentina - Corrientes",
                    "6",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    7L,
                    "usertest5@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Aurelia Flowers",
                    "Argentina - Buenos Aires",
                    "2",
                    "30",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    7L,
                    "usertest6@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Laurel Moody",
                    "Argentina - Misiones",
                    "4",
                    "45",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    8L,
                    "usertest7@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Benedict Pratt",
                    "Argentina - San Juan",
                    "2",
                    "15",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    8L,
                    "usertest8@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Russell Cross",
                    "Argentina - Buenos Aires",
                    "3",
                    "23",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    9L,
                    "usertest1@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Eleanor Cummings",
                    "Argentina - Misiones",
                    "1",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    9L,
                    "usertest2@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Michael Raymond",
                    "Argentina - Córdoba",
                    "6",
                    "20",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    10L,
                    "usertest3@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Morgan Gibson",
                    "Argentina - Mendoza",
                    "1",
                    "10",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    10L,
                    "usertest4@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Simon Hill",
                    "Argentina - Corrientes",
                    "6",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    11L,
                    "usertest5@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Aurelia Flowers",
                    "Argentina - Buenos Aires",
                    "2",
                    "30",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    11L,
                    "usertest6@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Laurel Moody",
                    "Argentina - Misiones",
                    "4",
                    "45",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    12L,
                    "usertest7@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Benedict Pratt",
                    "Argentina - San Juan",
                    "2",
                    "15",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    12L,
                    "usertest8@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Russell Cross",
                    "Argentina - Buenos Aires",
                    "3",
                    "23",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    13L,
                    "usertest1@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Eleanor Cummings",
                    "Argentina - Misiones",
                    "1",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    13L,
                    "usertest2@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Michael Raymond",
                    "Argentina - Córdoba",
                    "6",
                    "20",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    14L,
                    "usertest3@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Morgan Gibson",
                    "Argentina - Mendoza",
                    "1",
                    "10",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    14L,
                    "usertest4@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Simon Hill",
                    "Argentina - Corrientes",
                    "6",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    15L,
                    "usertest5@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Aurelia Flowers",
                    "Argentina - Buenos Aires",
                    "2",
                    "30",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    15L,
                    "usertest6@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Laurel Moody",
                    "Argentina - Misiones",
                    "4",
                    "45",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    16L,
                    "usertest7@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Benedict Pratt",
                    "Argentina - San Juan",
                    "2",
                    "15",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    16L,
                    "usertest8@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Russell Cross",
                    "Argentina - Buenos Aires",
                    "3",
                    "23",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    17L,
                    "usertest1@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Eleanor Cummings",
                    "Argentina - Misiones",
                    "1",
                    "50",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    17L,
                    "usertest2@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Michael Raymond",
                    "Argentina - Córdoba",
                    "6",
                    "20",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    18L,
                    "usertest3@htm.cuak",
                    encoder.encode("1234")

            );
            service.dataServiceProviderLoad(
                    "Morgan Gibson",
                    "Argentina - Mendoza",
                    "1",
                    "10",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Integer sodales erat nec dolor lobortis, a pellentesque metus pulvinar. " +
                            "Praesent sagittis est nunc, eget ultricies massa dapibus ut. " +
                            "Ut cursus tincidunt iaculis.",
                    18L,
                    "usertest4@htm.cuak",
                    encoder.encode("1234")

            );
        }
    }

}
