package com.cuchucambiazo.user;

import api.cuchucambiazo.controller.user.model.GeneralBusinessResponse;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.persistence.UsuarioRepository;
import com.cuchucambiazo.user.build.ResponseBuild;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private ResponseBuild responseBuild;

    @Autowired
    private UsuarioRepository usuarioRepository;


    public GeneralBusinessResponse saveUser(User user){

        //usuarioRepository.save(user);

        return responseBuild.userResponseBuild("00","Correcto paaaaa");
    }
}
