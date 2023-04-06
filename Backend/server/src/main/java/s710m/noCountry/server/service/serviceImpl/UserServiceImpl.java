package s710m.noCountry.server.service.serviceImpl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import s710m.noCountry.server.mapper.UserMapper;
import s710m.noCountry.server.model.Authority;
import s710m.noCountry.server.model.User;
import s710m.noCountry.server.model.dto.LoginClientResponseDto;
import s710m.noCountry.server.model.dto.LoginRequestDto;
import s710m.noCountry.server.model.dto.LoginServiceProviderResponseDto;
import s710m.noCountry.server.model.enums.NameAuthority;
import s710m.noCountry.server.repository.UserRepository;
import s710m.noCountry.server.security.filter.JWTService;
import s710m.noCountry.server.service.UserService;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    private final UserMapper mapper;


    @Override
    public Object login(LoginRequestDto dto) {
        authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
                        dto.getEmail(),
                        dto.getPassword()
                )
        );
        User user = repository.findByEmail(dto.getEmail()).orElseThrow();
        String authority = user.getAuthorities().stream().map(Authority::getAuthority).collect(Collectors.toList()).get(0);
        if (authority.equals(NameAuthority.ROLE_CLIENT.name())){
            String token = jwtService.generateToken(user);
            return mapper.toClientDto(user, user.getClient(),token);
        }
        String token = jwtService.generateToken(user);
        return mapper.toServiceProviderDto(user,user.getServiceProvider(),token);
    }
}
